import { RouterModule } from '@angular/router'

import { InterfaceComponent } from './interface.component'
// 新增 or 编辑
import { InterfaceEditComponent } from './interface-edit/interface-edit.component'

export const interfaceLogRoutes = [
  {
    path: '',
    component: InterfaceComponent
  },
  { path: 'edit', component: InterfaceEditComponent },
  { path: 'edit/:id', component: InterfaceEditComponent }
]
