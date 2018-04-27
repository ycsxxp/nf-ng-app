import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WirelessComponent } from './wireless.component';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module';
// 引入公共组件
import { WirelessRoutes } from './wireless.routes';
import { WirelessService } from './wireless.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(WirelessRoutes),
    SharedModule
  ],
  declarations: [WirelessComponent],
  providers: [WirelessService]
})
export class WirelessModule { }
