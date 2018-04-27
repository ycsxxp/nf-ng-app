import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { domainLogRoutes } from './domain.routes'

import { DomainComponent } from './domain.component';

@NgModule({
  imports: [
    RouterModule.forChild(domainLogRoutes),
    SharedModule
  ],
  declarations: [DomainComponent]
})
export class DomainModule { }
