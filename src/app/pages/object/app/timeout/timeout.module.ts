import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { timeoutLogRoutes } from './timeout.routes'

import { TimeoutComponent } from './timeout.component';

@NgModule({
  imports: [
    RouterModule.forChild(timeoutLogRoutes),
    SharedModule
  ],
  declarations: [TimeoutComponent]
})
export class TimeoutModule { }
