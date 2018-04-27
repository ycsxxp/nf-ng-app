import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { fwReportRoutes } from './fw.routes'
//
import { FwComponent } from './fw.component';

@NgModule({
  imports: [
    RouterModule.forChild(fwReportRoutes),
    SharedModule
  ],
  declarations: [FwComponent]
})
export class FwModule { }
