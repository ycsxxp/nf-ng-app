import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScmComponent } from './scm.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { ScmRoutes } from './scm.routes';
import { ScmService } from './scm.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(ScmRoutes),
    SharedModule
  ],
  declarations: [ScmComponent],
  providers: [ScmService]
})
export class ScmModule { }
