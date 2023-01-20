import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NotpageFoundComponent } from './notpage-found/notpage-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotpageFoundComponent},
];

//equi el modulo principal app-routing.module se integra con los otros routing.module (el de Page y el de Auth) 
@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
