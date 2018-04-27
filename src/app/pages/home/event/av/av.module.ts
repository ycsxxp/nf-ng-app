import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvComponent } from './av.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { AvRoutes } from './av.routes';
import { AvService } from './av.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(AvRoutes),
    SharedModule
  ],
  declarations: [AvComponent],
  providers: [AvService]
})
export class AvModule { }
