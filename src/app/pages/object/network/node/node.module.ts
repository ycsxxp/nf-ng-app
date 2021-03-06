import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { nodeLogRoutes } from './node.routes'

import { NodeComponent } from './node.component';

@NgModule({
  imports: [
    RouterModule.forChild(nodeLogRoutes),
    SharedModule
  ],
  declarations: [NodeComponent]
})
export class NodeModule { }
