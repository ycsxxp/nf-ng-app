import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { userLogRoutes } from './user.routes'

import { UserComponent } from './user.component';

@NgModule({
  imports: [
    RouterModule.forChild(userLogRoutes),
    SharedModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
