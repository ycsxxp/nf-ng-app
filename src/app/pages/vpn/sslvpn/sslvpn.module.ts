
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SslvpnComponent } from './sslvpn.component';
import { SharedModule } from '../../../shared/shared.module';
import { SslvpnRoutes } from './sslvpn.routes';
import { SslvpnService } from './sslvpn.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { UserComponent } from './user/user.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserGroupComponent } from './user-group/add-user-group/add-user-group.component';
import { EditUserGroupComponent } from './user-group/edit-user-group/edit-user-group.component';
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(SslvpnRoutes),
    SharedModule
  ],
  declarations: [
    SslvpnComponent,
    AddUserComponent,
    EditUserComponent,
    UserComponent,
    UserGroupComponent,
    AddUserGroupComponent,
    EditUserGroupComponent],
  entryComponents: [
    EditUserGroupComponent,
    AddUserGroupComponent,
    AddUserComponent,
    EditUserComponent],
  providers: [SslvpnService, NzNotificationService]
})
export class SslvpnModule { }
