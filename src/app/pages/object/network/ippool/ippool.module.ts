import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { ippoolLogRoutes } from './ippool.routes'

import { IppoolComponent } from './ippool.component';

@NgModule({
  imports: [
    RouterModule.forChild(ippoolLogRoutes),
    SharedModule
  ],
  declarations: [IppoolComponent]
})
export class IppoolModule { }
