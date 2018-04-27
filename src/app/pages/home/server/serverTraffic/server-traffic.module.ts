import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServerTrafficComponent } from './server-traffic.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
// import { EchartsNg2Module } from 'echarts-ng2';
import { ServerTrafficRoutes } from './server-traffic.routes';
import { ServerTrafficService } from './server-traffic.service';


import { TopTrafficComponent } from './top-traffic/top-traffic.component';
import { DownTrafficComponent } from './down-traffic/down-traffic.component';


@NgModule({
  imports: [
    // EchartsNg2Module,
    RouterModule,
    RouterModule.forChild(ServerTrafficRoutes),
    SharedModule
  ],
  declarations: [DownTrafficComponent,TopTrafficComponent,ServerTrafficComponent],
  providers: [ServerTrafficService]
})
export class ServerTrafficModule { }
