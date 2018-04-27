import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module'

import { LayoutComponent } from './layout.component'
// 顶部导航
import { HeaderComponent } from './header/header.component';
import { HeaderThemeComponent } from './header/components/theme/theme.component'
// 左边导航
import { SidebarComponent } from './sidebar/sidebar.component'

// 引入menu服务
import { MenusService } from './sidebar/menus.service'

import { LayoutService } from './layout.service'

const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  SidebarComponent
]
const HEADERCOMPONENTS = [
  HeaderThemeComponent
]
@NgModule({
  imports: [
    SharedModule.forRoot()
  ],
  declarations: [
    ...COMPONENTS,
    ...HEADERCOMPONENTS
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: [
    { provide: 'menusService', useClass: MenusService },
    { provide: 'layoutService', useClass: LayoutService }
  ]
})
export class LayoutModule { }
