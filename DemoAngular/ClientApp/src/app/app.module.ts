import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { ContentLayoutComponent } from './views/content-layout/content-layout.component';
import { HomeComponent } from './views/content-layout/home/home.component';
import { Menu2Component } from './views/content-layout/menu2/menu2.component';
import { Menu3Component } from './views/content-layout/menu3/menu3.component';
import { Menu4Component } from './views/content-layout/menu4/menu4.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

import { NgxLoadingModule } from 'ngx-loading';;
import {
  DxDataGridModule, DxPopupModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    LoginComponent,
    HomeComponent,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    NavMenuComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgxLoadingModule,
    DxDataGridModule,
    DxPopupModule,
    RouterModule.forRoot([
      {
        path: '', component: ContentLayoutComponent, canActivate: [AuthGuard],
        children: [
          {
            path: '', component: HomeComponent
          },
          {
            path: 'home', component: HomeComponent
          },
          {
            path: 'menu2', component: Menu2Component
          },
          {
            path: 'menu3', component: Menu3Component
          },
          {
            path: 'menu4', component: Menu4Component
          }
        ]
      },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

