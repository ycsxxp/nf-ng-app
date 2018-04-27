import { Component, AfterViewInit, AfterViewChecked, OnInit, Inject, ElementRef, HostListener, ViewChild, Renderer2 } from '@angular/core'
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs'

import { MainService } from './main.service'

@Component({
  selector: 'app-home-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit, AfterViewInit, AfterViewChecked {
  // 页面加载中
  private _isSpinning: Boolean
  // 仪表盘可用宽度
  public dashboardWidth = 0
  // 仪表盘可用高度
  public dashboardHeight = 0
  // 分为多少份 默认3份
  public dashboardDivide = 3

  private widgetHeight = 250
  // 抓起的区域
  public handle: HTMLElement
  // 被抓起区域的宽度
  private handleWidth: number
  // 被移动区域的原始位置
  private originPositionX: number
  private originPositionY: number
  private originScrollTop: number
  // 是否在移动
  private moving = false
  // 按下时的鼠标位置 x
  private oldMousePositonX: number
  // 按下时的鼠标位置 y
  private oldMousePositonY: number

  public nzSpan = 8

  public widgetPosArr = []
  private widgetResizeArr = []
  @ViewChild('widgetHighLight') private widgetHighLight: ElementRef
  constructor(
    @Inject('layoutService') private layoutService,
    private mainService: MainService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  // 初始化widget位置
  private initWidgetPosArr() {
    // 加载中
    this._isSpinning = true
    this.mainService.getWidgetPosArr().then(data => {
      // 获取存储的widget位置信息
      this.widgetPosArr = data
      // 重绘面板
      this.resizeDashboard(this.widgetPosArr)
      // 加载完成
      this._isSpinning = false
    })
  }
  // 更新widget位置
  private updateWidgetPosArr(widgetPosArr) {
    // 加载中
    this._isSpinning = true
    this.mainService.setWidgetPosArr(widgetPosArr).then(res => {
      // 加载完成
      this._isSpinning = false
    })
  }
  private putBack() {
    if (this.moving) {
      const _widgetName = this.handle.getAttribute('id')
      const newPosArr = this.getWidgetPosArr(this.widgetPosArr, _widgetName)
      this.resizeDashboard(newPosArr)

      this.renderer.setStyle(this.widgetHighLight.nativeElement, 'display', 'none')
      this.handle.style.removeProperty('z-index')
      this.moving = false

      this.updateWidgetPosArr(this.widgetPosArr)
    }
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: any) {
    if (event.button === 2 || event.target.parentElement.className !== 'widget-header' ) {
      return
    }
    this.moving = true
    // 获取当前按下鼠标的位置 - 200 - 24 - 12 | - 106
    this.oldMousePositonX = event.clientX
    this.oldMousePositonY = event.clientY

    this.handle = event.target.parentElement.parentElement.parentElement.parentElement
    this.handleWidth = parseFloat(window.getComputedStyle(this.handle).getPropertyValue('width'))
    this.originPositionX = parseFloat(window.getComputedStyle(this.handle).getPropertyValue('left'))
    this.originPositionY = parseFloat(window.getComputedStyle(this.handle).getPropertyValue('top'))
    this.originScrollTop = window.document.getElementById('content').scrollTop

    this.renderer.setStyle(this.handle, 'left', this.originPositionX + 'px');
    this.renderer.setStyle(this.handle, 'top', this.originPositionY + 'px');
    this.renderer.setStyle(this.handle, 'z-index', '999')

    // 设置高亮区域
    const height = window.getComputedStyle(this.handle).getPropertyValue('height')
    const width = window.getComputedStyle(this.handle).getPropertyValue('width')
    const left = window.getComputedStyle(this.handle).getPropertyValue('left')
    const top = window.getComputedStyle(this.handle).getPropertyValue('top')
    this.renderer.setStyle(this.widgetHighLight.nativeElement, 'display', 'block')
    this.renderer.setStyle(this.widgetHighLight.nativeElement, 'height', height)
    this.renderer.setStyle(this.widgetHighLight.nativeElement, 'width', width)
    this.renderer.setStyle(this.widgetHighLight.nativeElement, 'left', left)
    this.renderer.setStyle(this.widgetHighLight.nativeElement, 'top', top)
  }
  @HostListener('document:mouseup') onMouseUp(event: any) {
    this.putBack()
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: any) {
    if (this.moving) {
      // 滚动的高度
      const wrapperrDom = window.document.getElementById('wrapper')
      const scrollTop = wrapperrDom.scrollTop

      let left = event.clientX - this.oldMousePositonX + this.originPositionX
      let top = event.clientY - this.oldMousePositonY + this.originPositionY + scrollTop - this.originScrollTop
      const right = this.dashboardWidth - left - this.handleWidth
      // 上 左
      if (left < 0) {
        left = 0
      }else {
        if (right < 0) {
          left = this.dashboardWidth - this.handleWidth
        }
      }
      if (top < 0) {
        top = 0
      }

      this.renderer.setStyle(this.handle, 'left', left + 'px')
      this.renderer.setStyle(this.handle, 'top', top + 'px')

      // 设置被放置的区域
      const pieceWidth = this.dashboardWidth / this.dashboardDivide
      const height = parseFloat(this.handle.style.height)
      const width = this.dashboardWidth / this.dashboardDivide
      const putX = Math.round(left / width)
      const putY = Math.round(top / height)
      const putArea = Math.round(this.handleWidth / pieceWidth)
      const putWidgetName = this.handle.getAttribute('id')
      let _widgetItem = { x: putX, y: putY, area: putArea, widget: putWidgetName}
      for (let i = 0; i < this.widgetPosArr.length; i++) {
        if (this.widgetPosArr[i].widget === _widgetItem.widget) {
          this.widgetPosArr[i] = _widgetItem
        }
      }
      const _newPosArr = this.widgetPosArr
      const _widgetName = putWidgetName
      const newPosArr = this.getWidgetPosArr(_newPosArr, _widgetName)
      for (let i = 0; i < newPosArr.length; i++) {
        let widget = newPosArr[i].widget
        if (widget === putWidgetName) {
          widget = 'widgetHighLight'
        }
        this.renderer.setStyle(document.getElementById(widget), 'left', newPosArr[i].x *  pieceWidth + 'px')
        this.renderer.setStyle(document.getElementById(widget), 'top', newPosArr[i].y * this.widgetHeight + 'px')
      }
    }
  }

  // 对修改过位置之后的数组重新计算位置 newPosArr新位置数组 widget 被修改作为基准的数组
  private recalcPos(_newPosArr, _widgetName) {
    let _widgetItem
    for (let i = 0; i < _newPosArr.length; i++) {
      if (_newPosArr[i].widget === _widgetName) {
        _widgetItem = _newPosArr[i]
        break
      }
    }
    // 移动过程中会产生新数组
    for (let i = 0; i < _widgetItem.area; i++) {
      for (let j = 0; j < _newPosArr.length; j++) {
        if (_widgetItem.widget === _newPosArr[j].widget) {
          if (_widgetItem.x + _widgetItem.area > this.dashboardDivide) {
            _newPosArr[j].x = 0
            _newPosArr[j].y = _newPosArr[j].y + 1
          } else {
            continue
          }
        }else {
          if (_widgetItem.y === _newPosArr[j].y && (_widgetItem.x + i >= _newPosArr[j].x && _widgetItem.x + i < _newPosArr[j].x + _newPosArr[j].area)) {
            _newPosArr[j].y = _newPosArr[j].y + 1
            this.recalcPos(_newPosArr, _newPosArr[j].widget)
          }
        }
      }
    }
    return _newPosArr
  }
  // 对重新计算后的数组去除空白行 返回真实的新位置数组
  private getWidgetPosArr(_newPosArr, _widgetName) {
    // tslint:disable-next-line:prefer-const
    let _widgetPosArr = this.recalcPos(_newPosArr, _widgetName)
    // 去掉新数组中的空白行
    let countRowWidget = 0
    for (let i = 0; i < _widgetPosArr.length; i++) {
      countRowWidget = 0
      for (let j = 0; j < _widgetPosArr.length; j++) {
        if (_widgetPosArr[j].y === i) {
          countRowWidget++
        }
      }
      if (countRowWidget === 0) {
        for (let k = 0; k < _widgetPosArr.length; k++) {
          if (_widgetPosArr[k].y > i) {
            _widgetPosArr[k].y = _widgetPosArr[k].y - 1
          }
        }
      }
    }
    return _widgetPosArr
  }

  public resizeDashboard(widgetPosArr = null) {
    widgetPosArr = widgetPosArr === null ? this.widgetPosArr : widgetPosArr
    // 每个宽度
    const pieceWidth = this.dashboardWidth / this.dashboardDivide
    // 行数
    let rowCount = 0

    for (const i in widgetPosArr) {
      if (widgetPosArr.hasOwnProperty(i)) {
        const item = widgetPosArr[i]
        this.widgetResizeArr[i] = {
          width: item.area * pieceWidth,
          height: this.widgetHeight,
          left: item.x * pieceWidth,
          top: item.y * this.widgetHeight,
          area: item.area,
          widget: item.widget
        }
        rowCount = rowCount > item.y ? rowCount : item.y
      }
    }
    this.dashboardHeight = ( rowCount + 1 ) * this.widgetHeight
  }

  onChangeArea(event) {
    for (let i = 0; i < this.widgetPosArr.length; i++) {
      if (this.widgetPosArr[i].widget === event.widget) {
        this.widgetPosArr[i].area = event.area
      }
    }
    const newPosArr = this.getWidgetPosArr(this.widgetPosArr, event.widget)
    this.resizeDashboard(newPosArr)
    this.updateWidgetPosArr(newPosArr)
  }

  ngAfterViewInit() { }

  ngAfterViewChecked(): void {
    const contentDom = window.document.getElementById('content')
    this.dashboardWidth = contentDom.clientWidth + 12
  }

  ngOnInit() {
    const contentDom = window.document.getElementById('content')
    this.initWidgetPosArr()

    // 注册layout组件中的 isCollapsed 变量在 main中的使用
    this.layoutService.isCollapsed$.subscribe(value => {
      // 修改画布大小
      this.dashboardWidth = value ? this.dashboardWidth + 200 - 64 : this.dashboardWidth - 200 + 64
      this.resizeDashboard()
    })

    Observable.fromEvent(window, 'resize')
      .debounceTime(100) // 以免频繁处理
      .subscribe((event) => {
        // 这里处理页面变化时的操作
        this.dashboardWidth = contentDom.clientWidth + 12
        this.resizeDashboard()
      });
  }
}
