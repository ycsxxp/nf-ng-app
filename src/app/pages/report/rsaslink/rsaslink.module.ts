import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { rsaslinkReportRoutes } from './rsaslink.routes'
//
import { RsaslinkComponent } from './rsaslink.component';

@NgModule({
  imports: [
    RouterModule.forChild(rsaslinkReportRoutes),
    SharedModule
  ],
  declarations: [RsaslinkComponent]
})
export class RsaslinkModule { }
