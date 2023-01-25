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
    {path: '', component: DashboardComponent},
    {path: 'user', component: UserComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'clients', component: ClientsComponent}
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
