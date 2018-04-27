import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { wirelessLogRoutes } from './wireless.routes'

import { WirelessComponent } from './wireless.component';

@NgModule({
  imports: [
    RouterModule.forChild(wirelessLogRoutes),
    SharedModule
  ],
  declarations: [WirelessComponent]
})
export class WirelessModule { }
