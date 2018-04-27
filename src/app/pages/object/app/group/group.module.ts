import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { groupLogRoutes } from './group.routes'

import { GroupComponent } from './group.component';

@NgModule({
  imports: [
    RouterModule.forChild(groupLogRoutes),
    SharedModule
  ],
  declarations: [GroupComponent]
})
export class GroupModule { }
