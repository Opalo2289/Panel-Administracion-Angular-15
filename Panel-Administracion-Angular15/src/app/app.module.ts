import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotpageFoundComponent } from './notpage-found/notpage-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    DashboardComponent,
    UserComponent,
    ProductsComponent,
    NotpageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
