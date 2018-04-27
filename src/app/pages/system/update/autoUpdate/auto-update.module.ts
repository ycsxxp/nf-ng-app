import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutoUpdateComponent } from './auto-update.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { AutoUpdateRoutes } from './auto-update.routes';
import { AutoUpdateService } from './auto-update.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(AutoUpdateRoutes),
    SharedModule
  ],
  declarations: [AutoUpdateComponent],
  providers: [AutoUpdateService]
})
export class AutoUpdateModule { }
