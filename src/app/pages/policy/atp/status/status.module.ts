import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { statusLogRoutes } from './status.routes'

import { StatusComponent } from './status.component';

@NgModule({
  imports: [
    RouterModule.forChild(statusLogRoutes),
    SharedModule
  ],
  declarations: [StatusComponent]
})
export class StatusModule { }
