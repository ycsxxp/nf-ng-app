import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { configLogRoutes } from './config.routes'

import { ConfigComponent } from './config.component';

@NgModule({
  imports: [
    RouterModule.forChild(configLogRoutes),
    SharedModule
  ],
  declarations: [ConfigComponent]
})
export class ConfigModule { }
