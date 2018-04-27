import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { wsReportRoutes } from './ws.routes'
//
import { WsComponent } from './ws.component';

@NgModule({
  imports: [
    RouterModule.forChild(wsReportRoutes),
    SharedModule
  ],
  declarations: [WsComponent]
})
export class WsModule { }
