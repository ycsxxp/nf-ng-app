import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { dnatLogRoutes } from './dnat.routes'

import { DnatComponent } from './dnat.component';

@NgModule({
  imports: [
    RouterModule.forChild(dnatLogRoutes),
    SharedModule
  ],
  declarations: [DnatComponent]
})
export class DnatModule { }
