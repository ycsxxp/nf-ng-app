import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IpsComponent } from './ips.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { IpsRoutes } from './ips.routes';
import { IpsService } from './ips.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(IpsRoutes),
    SharedModule
  ],
  declarations: [IpsComponent],
  providers: [IpsService]
})
export class IpsModule { }
