import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件
import { DatetimepickerModule } from '../../../components/datetimepicker/datetimepicker.module'
// 路由
import { reputationLogRoutes } from './reputation.routes'

import { ReputationComponent } from './reputation.component';

@NgModule({
  imports: [
    RouterModule.forChild(reputationLogRoutes),
    SharedModule,
    DatetimepickerModule
  ],
  declarations: [ReputationComponent]
})
export class ReputationModule { }
