import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module'
// 引入公共组件

// 路由
import { layerctrlLogRoutes } from './layerctrl.routes'

import { LayerctrlComponent } from './layerctrl.component';

@NgModule({
  imports: [
    RouterModule.forChild(layerctrlLogRoutes),
    SharedModule
  ],
  declarations: [LayerctrlComponent]
})
export class LayerctrlModule { }
