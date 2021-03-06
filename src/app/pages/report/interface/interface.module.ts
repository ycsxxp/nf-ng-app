import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { interfaceReportRoutes } from './interface.routes'
//
import { InterfaceComponent } from './interface.component';

@NgModule({
  imports: [
    RouterModule.forChild(interfaceReportRoutes),
    SharedModule
  ],
  declarations: [InterfaceComponent]
})
export class InterfaceModule { }
