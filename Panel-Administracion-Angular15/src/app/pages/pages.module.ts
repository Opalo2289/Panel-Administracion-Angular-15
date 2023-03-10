import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './clients/clients.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProductsComponent,
    PagesComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    UserComponent,
    ProductsComponent,
    PagesComponent
  ]
})
export class PagesModule { }
