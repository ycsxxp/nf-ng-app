import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { ipsReportRoutes } from './ips.routes'
//
import { IpsComponent } from './ips.component';

@NgModule({
  imports: [
    RouterModule.forChild(ipsReportRoutes),
    SharedModule
  ],
  declarations: [IpsComponent]
})
export class IpsModule { }
