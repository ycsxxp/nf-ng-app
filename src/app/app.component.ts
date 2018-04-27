import { Component, OnInit, Inject, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  // 用来监控左边菜单是否折叠
  @HostBinding('class.aside-collapsed') get isCollapsed() { return this.layoutService.layout.collapsed }
  constructor(
    @Inject('layoutService') private layoutService
  ) {
  }
  ngOnInit () {}
}
