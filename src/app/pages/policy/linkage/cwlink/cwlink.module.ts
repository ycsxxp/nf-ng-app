import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { cwlinkLogRoutes } from './cwlink.routes'

import { CwlinkComponent } from './cwlink.component';

@NgModule({
  imports: [
    RouterModule.forChild(cwlinkLogRoutes),
    SharedModule
  ],
  declarations: [CwlinkComponent]
})
export class CwlinkModule { }
