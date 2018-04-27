import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件
import { DatetimepickerModule } from '../../../components/datetimepicker/datetimepicker.module'
// 路由
import { auditLogRoutes } from './audit.routes'

import { AuditComponent } from './audit.component';

@NgModule({
  imports: [
    RouterModule.forChild(auditLogRoutes),
    SharedModule,
    DatetimepickerModule
  ],
  declarations: [AuditComponent]
})
export class AuditModule { }
