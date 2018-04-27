import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { kslinkLogRoutes } from './kslink.routes'

import { KslinkComponent } from './kslink.component';

@NgModule({
  imports: [
    RouterModule.forChild(kslinkLogRoutes),
    SharedModule
  ],
  declarations: [KslinkComponent]
})
export class KslinkModule { }
