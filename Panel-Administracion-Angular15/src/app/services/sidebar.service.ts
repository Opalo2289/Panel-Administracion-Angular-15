import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[]= [

    {
      titulo: 'Dashboard',
      icon: 'nav-icon fas fa-tachometer-alt',
      submenu: [

        {titulo: 'User', URL: 'user', icon: 'fa fa-users'},
        {titulo: 'Products', URL: 'products', icon: 'fa fa-cubes'},
        {titulo: 'Clients', URL: 'clients', icon: 'fa fa-user-circle'}

      ]
    }

  ]

} //este servicio de injecta en shared.components.ts