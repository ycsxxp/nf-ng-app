import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// 时间格式化
import { DatePipe } from '@angular/common'
// 引入一些公共模块
import { SharedModule } from '../../../shared/shared.module'
// 引入公共组件

// 路由
import { interfaceLogRoutes } from './interface.routes'

import { InterfaceComponent } from './interface.component';
// 新增 or 编辑
import { InterfaceEditComponent } from './interface-edit/interface-edit.component'
// 注册服务
import { InterfaceService } from './interface.service'

@NgModule({
  imports: [
    RouterModule.forChild(interfaceLogRoutes),
    SharedModule
  ],
  declarations: [InterfaceComponent, InterfaceEditComponent],
  providers: [
    { provide: 'interface', useClass: InterfaceService },
    { provide: 'datePipe', useClass: DatePipe }
  ]
})
export class InterfaceModule { }
