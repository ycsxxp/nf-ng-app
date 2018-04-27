import { Component, OnInit, Inject, ViewChild, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// 顶部导航
import { HeaderComponent } from './header/header.component'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // 主题配色
  // private theme = ''
  private theme = 'theme-green'
  // private theme = 'theme-red'

  public menus: any[]
  // 定义被选中的页面
  public selectedLeftMenuItem = ''
  // 定义面包屑数组
  public breadcrumbArr = []

  @ViewChild('content') private content
  constructor(
    @Inject('layoutService') private layoutService,
    private router: Router,
    private renderer: Renderer2
  ) { }

  // 设置面包屑显示
  public setBreadcrumb(url = this.router.url) {
    this.breadcrumbArr = []
    this.breadcrumbArr.reverse();
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {

  }

}
