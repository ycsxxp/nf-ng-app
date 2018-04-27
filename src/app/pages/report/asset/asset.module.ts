import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { assetReportRoutes } from './asset.routes'
//
import { AssetComponent } from './asset.component';

@NgModule({
  imports: [
    RouterModule.forChild(assetReportRoutes),
    SharedModule
  ],
  declarations: [AssetComponent]
})
export class AssetModule { }
