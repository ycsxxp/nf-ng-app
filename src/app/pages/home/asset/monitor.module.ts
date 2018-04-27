import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MonitorComponent } from './monitor.component';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module';
// 引入公共组件
import { MonitorRoutes } from './monitor.routes';
import { MonitorService } from './monitor.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(MonitorRoutes),
    SharedModule
  ],
  declarations: [MonitorComponent],
  providers: [MonitorService]
})
export class MonitorModule { }
