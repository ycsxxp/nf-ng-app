import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// HTTP服务
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

// 路由
import { MyRoutesModule } from './my-routes/my-routes.module'

import { LoginComponent } from './login/login.component';

// 通用的模块部分
import { SharedModule } from '@shared/shared.module';

import { LayoutModule } from './layout/layout.module'
// import { LayoutComponent } from './layout/layout.component';
// 日志

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    LayoutModule,
    MyRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
