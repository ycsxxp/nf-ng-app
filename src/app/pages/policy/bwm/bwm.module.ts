import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { bwmLogRoutes } from './bwm.routes'

import { BwmComponent } from './bwm.component';

@NgModule({
  imports: [
    RouterModule.forChild(bwmLogRoutes),
    SharedModule
  ],
  declarations: [BwmComponent]
})
export class BwmModule { }
