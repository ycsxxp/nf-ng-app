import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackupComponent } from './backup.component';
// 引入一些公共模块
import { SharedModule } from '../../../../shared/shared.module';
// 引入公共组件
import { BackupRoutes } from './backup.routes';
import { BackupService } from './backup.service';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(BackupRoutes),
    SharedModule
  ],
  declarations: [BackupComponent],
  providers: [BackupService]
})
export class BackupModule { }
