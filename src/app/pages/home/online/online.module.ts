import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnlineComponent } from './online.component';
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module';
// 引入公共组件
import { OnlineRoutes } from './online.routes';
import { OnlineService } from './online.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(OnlineRoutes),
    SharedModule
  ],
  declarations: [OnlineComponent],
  providers: [OnlineService]
})
export class OnlineModule { }
