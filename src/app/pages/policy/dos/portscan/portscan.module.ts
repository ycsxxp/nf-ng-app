import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { portscanLogRoutes } from './portscan.routes'

import { PortscanComponent } from './portscan.component';

@NgModule({
  imports: [
    RouterModule.forChild(portscanLogRoutes),
    SharedModule
  ],
  declarations: [PortscanComponent]
})
export class PortscanModule { }
