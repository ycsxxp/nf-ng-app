import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { ruleLogRoutes } from './rule.routes'

import { RuleComponent } from './rule.component';

@NgModule({
  imports: [
    RouterModule.forChild(ruleLogRoutes),
    SharedModule
  ],
  declarations: [RuleComponent]
})
export class RuleModule { }
