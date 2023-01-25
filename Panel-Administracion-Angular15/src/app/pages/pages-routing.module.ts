import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path: 'dashboard', component: PagesComponent,
  children: [
    {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
    {path: 'user', component: UserComponent, data: {titulo: 'User'}},
    {path: 'products', component: ProductsComponent, data: {titulo: 'Products'}},
    {path: 'clients', component: ClientsComponent, data: {titulo: 'Clients'}}
  ]
}  

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
