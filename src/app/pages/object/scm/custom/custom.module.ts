import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { customLogRoutes } from './custom.routes'

import { CustomComponent } from './custom.component';

@NgModule({
  imports: [
    RouterModule.forChild(customLogRoutes),
    SharedModule
  ],
  declarations: [CustomComponent]
})
export class CustomModule { }
