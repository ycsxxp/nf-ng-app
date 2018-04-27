import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { ipmacbindLogRoutes } from './ipmacbind.routes'

import { IpmacbindComponent } from './ipmacbind.component';

@NgModule({
  imports: [
    RouterModule.forChild(ipmacbindLogRoutes),
    SharedModule
  ],
  declarations: [IpmacbindComponent]
})
export class IpmacbindModule { }
