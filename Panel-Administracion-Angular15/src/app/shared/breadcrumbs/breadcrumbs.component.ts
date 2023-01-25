import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import {  Subscription  } from 'rxjs';
import { map, filter } from 'rxjs/operators'; // trabaja con el observable, podemos una ubicacion y crar una nueva respuesta

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  
  public titulo?: string;
  public tituloSubs$: Subscription
  
  
  constructor(private router:Router) { 
    this.tituloSubs$ = this.getArgument().subscribe(({titulo}) => {

      this.titulo = titulo;
      document.title = `adminLte - ${titulo}`;

    }); //esta es la suscripcion de getArguments, esto viene del data que esta en pages.routing.module
    
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }

  getArgument() {
    return this.router.events.pipe(
      filter((event:any) => event instanceof ActivationEnd),//nos permite trabajar con los elementos de la navegacion
      filter((event: ActivationEnd) => event.snapshot.firstChild == null), //esto va a a guardar las capturas de pantalla
      map((event:ActivationEnd) => event.snapshot.data)
    );
  };

  

}
