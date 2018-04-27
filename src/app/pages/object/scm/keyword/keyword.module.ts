import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { keywordLogRoutes } from './keyword.routes'

import { KeywordComponent } from './keyword.component';

@NgModule({
  imports: [
    RouterModule.forChild(keywordLogRoutes),
    SharedModule
  ],
  declarations: [KeywordComponent]
})
export class KeywordModule { }
