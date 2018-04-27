import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateBackComponent } from './update-back.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { UpdateBackRoutes } from './update-back.routes';
import { UpdateBackService } from './update-back.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(UpdateBackRoutes),
    SharedModule
  ],
  declarations: [UpdateBackComponent],
  providers: [UpdateBackService]
})
export class UpdateBackModule { }
