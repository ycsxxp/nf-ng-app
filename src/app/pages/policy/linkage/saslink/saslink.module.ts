import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { saslinkLogRoutes } from './saslink.routes'

import { SaslinkComponent } from './saslink.component';

@NgModule({
  imports: [
    RouterModule.forChild(saslinkLogRoutes),
    SharedModule
  ],
  declarations: [SaslinkComponent]
})
export class SaslinkModule { }
