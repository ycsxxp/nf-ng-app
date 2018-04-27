import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { netLogRoutes } from './net.routes'

import { NetComponent } from './net.component';

@NgModule({
  imports: [
    RouterModule.forChild(netLogRoutes),
    SharedModule
  ],
  declarations: [NetComponent]
})
export class NetModule { }
