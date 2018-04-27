import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { idslinkLogRoutes } from './idslink.routes'

import { IdslinkComponent } from './idslink.component';

@NgModule({
  imports: [
    RouterModule.forChild(idslinkLogRoutes),
    SharedModule
  ],
  declarations: [IdslinkComponent]
})
export class IdslinkModule { }
