import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { arpspoofLogRoutes } from './arpspoof.routes'

import { ArpspoofComponent } from './arpspoof.component';

@NgModule({
  imports: [
    RouterModule.forChild(arpspoofLogRoutes),
    SharedModule
  ],
  declarations: [ArpspoofComponent]
})
export class ArpspoofModule { }
