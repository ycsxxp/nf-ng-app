import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private toggleCollapsedSidebar() {
    this.layoutService.setLayout('collapsed', !this.layoutService.layout.collapsed)
    // 刚方法用来通知仪表盘组件 因为该组件的宽度需要动态计算 无法用css控制
    this.layoutService.isCollapsed$.emit(this.layoutService.layout.collapsed)
  }

  constructor(
    @Inject('layoutService') private layoutService
  ) { }

  ngOnInit() {
  }

}
