import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件
import { DatetimepickerModule } from '../../../components/datetimepicker/datetimepicker.module'
// 路由
import { atpLogRoutes } from './atp.routes'

import { AtpComponent } from './atp.component';

@NgModule({
  imports: [
    RouterModule.forChild(atpLogRoutes),
    SharedModule,
    DatetimepickerModule
  ],
  declarations: [AtpComponent]
})
export class AtpModule { }
