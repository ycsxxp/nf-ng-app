import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { pingsweepLogRoutes } from './pingsweep.routes'

import { PingsweepComponent } from './pingsweep.component';

@NgModule({
  imports: [
    RouterModule.forChild(pingsweepLogRoutes),
    SharedModule
  ],
  declarations: [PingsweepComponent]
})
export class PingsweepModule { }
