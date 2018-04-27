import { RouterModule } from '@angular/router'

import { SslvpnComponent } from './sslvpn.component'
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserGroupComponent } from './user-group/add-user-group/add-user-group.component';

export const SslvpnRoutes = [
  {
    path: '',
    component: SslvpnComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  },
  {
    path: 'editUser/:id',
    component: EditUserComponent
  },
  {
    path: 'addUserGroup',
    component: AddUserGroupComponent
  }
]