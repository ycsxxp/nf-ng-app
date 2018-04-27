import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { searchLogRoutes } from './search.routes'

import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    RouterModule.forChild(searchLogRoutes),
    SharedModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
