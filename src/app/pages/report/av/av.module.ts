import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { avReportRoutes } from './av.routes'
//
import { AvComponent } from './av.component';

@NgModule({
  imports: [
    RouterModule.forChild(avReportRoutes),
    SharedModule
  ],
  declarations: [AvComponent]
})
export class AvModule { }
