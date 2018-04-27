import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WsComponent } from './ws.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { WsRoutes } from './ws.routes';
import { WsService } from './ws.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(WsRoutes),
    SharedModule
  ],
  declarations: [WsComponent],
  providers: [WsService]
})
export class WsModule { }
