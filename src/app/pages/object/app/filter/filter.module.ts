import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { filterLogRoutes } from './filter.routes'

import { FilterComponent } from './filter.component';

@NgModule({
  imports: [
    RouterModule.forChild(filterLogRoutes),
    SharedModule
  ],
  declarations: [FilterComponent]
})
export class FilterModule { }
