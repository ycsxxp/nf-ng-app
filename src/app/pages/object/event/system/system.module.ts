import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { systemLogRoutes } from './system.routes'

import { SystemComponent } from './system.component';

@NgModule({
  imports: [
    RouterModule.forChild(systemLogRoutes),
    SharedModule
  ],
  declarations: [SystemComponent]
})
export class SystemModule { }
