import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-network-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  // 加载中
  private _isSpinning: Boolean

  private interfaceList = []

  public tableHeader = [
    { title: '名称' },
    { title: '绑定接口' },
    { title: '类型' },
    { title: '可管理属性' },
    { title: 'IP' },
    { title: 'VLAN' },
    { title: 'VWire' },
    { title: '安全区' },
    { title: '操作' }
  ]
  // 查找
  public _search: string
  // 当前页数
  public _current = 1
  // 全选
  public _allChecked = false;
  public _indeterminate = false;
  public _disabledDeleteBtn = true
  public _refreshStatus() {
    const allChecked = this.interfaceList.every(value => value.checked === true)
    const allUnChecked = this.interfaceList.every(value => !value.checked)
    this._allChecked = allChecked
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledDeleteBtn = !this.interfaceList.some(value => value.checked);
  }
  public _checkAll(value) {
    if (value) {
      this.interfaceList.forEach(data => data.checked = true);
    } else {
      this.interfaceList.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }
  // 获取接口列表
  private getInterfaceList() {
    // 加载中
    this._isSpinning = true
    this.interfaceService.getInterfaceList().subscribe(res => {
      // mockapi
      // const status = '0000'
      // const msg = 'success'
      // const data = res

      // product
      const status = res.status
      const msg = res.msg
      const data = res.data

      if (status === '0000') {
        // 加载完成
        this._isSpinning = false
        this.interfaceList = data
        // 刷新多选框
        this._refreshStatus()
      } else {
        console.log('failed')
      }
    })
  }
  // 新建 or 编辑
  private edit(item = null) {
    if (item === null) {
      // 说明是新建
      this.router.navigate(['edit', ''], {
        relativeTo: this.route
      })
    } else {
      // 说明是编辑
      this.router.navigate(['edit', item.id], {
        // queryParams: {
        //   id: 2
        // },
        relativeTo: this.route
      })
    }
    // const currentTime = this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss')
    // item.name = 'update.' + currentTime
    // this.interfaceService.updateInterface(item).then(res => {
    //   this.getInterfaceList()
    // })
    // this.router.navigate(['edit', item.id], {
    //   // queryParams: {
    //   //   id: 2
    //   // },
    //   relativeTo: this.route
    // })
  }
  // 删除
  private delete() {
    let id
    this.interfaceList.forEach(data => {
      if (data.checked) {
        id = data.id
      }
    })
    // 加载中
    this._isSpinning = true
    this.interfaceService.deleteInterface(id).then(res => {
      // 此处需要后台返回成功，失败错误
      if (res) {
        // 成功
        this._message.success('删除成功');
      } else {
        // 失败
        this._message.success('删除失败');
      }
      // 获取接口列表
      this.getInterfaceList()
    })
  }
  // 路由跳转
  public routeTo(to) {
    this.router.navigate([to], { relativeTo: this.route })
  }
  constructor(
    @Inject('interface') private interfaceService,
    @Inject('datePipe') private datePipe,
    private router: Router,
    private route: ActivatedRoute,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
    this.getInterfaceList()
  }

}
