import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RestoreComponent } from './restore.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { RestoreRoutes } from './restore.routes';
import { RestoreService } from './restore.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(RestoreRoutes),
    SharedModule
  ],
  declarations: [RestoreComponent],
  providers: [RestoreService]
})
export class RestoreModule { }
