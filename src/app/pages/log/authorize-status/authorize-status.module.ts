import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { authorizeStatusLogRoutes } from './authorize-status.routes'

import { AuthorizeStatusComponent } from './authorize-status.component';

@NgModule({
  imports: [
    RouterModule.forChild(authorizeStatusLogRoutes),
    SharedModule
  ],
  declarations: [AuthorizeStatusComponent]
})
export class AuthorizeStatusModule { }
