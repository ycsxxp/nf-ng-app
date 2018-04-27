import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { levelLogRoutes } from './level.routes'

import { LevelComponent } from './level.component';

@NgModule({
  imports: [
    RouterModule.forChild(levelLogRoutes),
    SharedModule
  ],
  declarations: [LevelComponent]
})
export class LevelModule { }
