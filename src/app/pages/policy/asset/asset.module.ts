import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { assetLogRoutes } from './asset.routes'

import { AssetComponent } from './asset.component';

@NgModule({
  imports: [
    RouterModule.forChild(assetLogRoutes),
    SharedModule
  ],
  declarations: [AssetComponent]
})
export class AssetModule { }
