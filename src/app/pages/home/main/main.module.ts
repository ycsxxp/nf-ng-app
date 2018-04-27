import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd'
//
import { MainComponent } from './main.component'

// 引入公共组件
// import { NzDemoDatePickerStartEndComponent } from '../../components/datetimepicker/datetimepicker.component'
import { SystemWidgetComponent } from '../../../components/dashboard/system-widget/system-widget.component'
import { VersionWidgetComponent } from '../../../components/dashboard/version-widget/version-widget.component'
import { InterfaceWidgetComponent } from '../../../components/dashboard/interface-widget/interface-widget.component'
import { TableWidgetComponent } from '../../../components/dashboard/table-widget/table-widget.component'
import { UlWidgetComponent } from '../../../components/dashboard/ul-widget/ul-widget.component'

// 路由
import { mainRoutes } from './main.routes'

// 注册服务
import { MainService } from './main.service'

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(mainRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    // NgZorroAntdModule.forRoot()
  ],
  declarations: [
    MainComponent,
    SystemWidgetComponent,
    VersionWidgetComponent,
    InterfaceWidgetComponent,
    TableWidgetComponent,
    UlWidgetComponent
    // NzDemoDatePickerStartEndComponent
  ],
  providers: [MainService]
})
export class MainModule { }
