import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd'
//
import { StatusComponent } from './status.component'
import { InterfaceInfoComponent } from './interface-info/interface-info.component'
import { IpsecTrafficComponent } from './ipsec-traffic/ipsec-traffic.component'
import { UserTrafficComponent } from './user-traffic/user-traffic.component'
import { IfTrafficComponent } from './if-traffic/if-traffic.component'
import { AppTrafficComponent } from './app-traffic/app-traffic.component'
import { BaseStatusComponent } from './base-status/base-status.component'

// 引入公共组件
// import { NzDemoDatePickerStartEndComponent } from '../../components/datetimepicker/datetimepicker.component'

// 路由
import { statusRoutes } from './status.routes'

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(statusRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,

    // NgZorroAntdModule.forRoot()
  ],
  declarations: [
    StatusComponent,
    InterfaceInfoComponent,
    BaseStatusComponent,
    IpsecTrafficComponent,
    UserTrafficComponent,
    IfTrafficComponent,
    AppTrafficComponent,
    // NzDemoDatePickerStartEndComponent
  ]
})
export class StatusModule { }
