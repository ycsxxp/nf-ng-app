import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { snatLogRoutes } from './snat.routes'

import { SnatComponent } from './snat.component';

@NgModule({
  imports: [
    RouterModule.forChild(snatLogRoutes),
    SharedModule
  ],
  declarations: [SnatComponent]
})
export class SnatModule { }
