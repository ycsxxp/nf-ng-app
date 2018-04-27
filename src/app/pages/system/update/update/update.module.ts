import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './update.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { UpdateRoutes } from './update.routes';
import { UpdateService } from './update.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(UpdateRoutes),
    SharedModule
  ],
  declarations: [UpdateComponent],
  providers: [UpdateService]
})
export class UpdateModule { }
