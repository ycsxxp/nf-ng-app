import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HealthStatusComponent } from './health-status.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { HealthStatusRoutes } from './health-status.routes';
import { HealthStatusService } from './health-status.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(HealthStatusRoutes),
    SharedModule
  ],
  declarations: [HealthStatusComponent],
  providers: [HealthStatusService]
})
export class HealthStatusModule { }
