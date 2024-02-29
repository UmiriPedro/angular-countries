import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

// Constante con la configuración de cada una de las rutas
const routes: Routes = [
  // Estoy diciendo que en el /home va a cargar HomePageComponent
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  // Estoy diciendo que en el /about va a cargar AboutPageComponent
  {
    path: 'about',
    component: AboutPageComponent
  },
  // Estoy diciendo que en el /contact va a cargar ContactPageComponent
  {
    path: 'contact',
    component: ContactPageComponent
  },
  // Estoy diciendo que en el /countries va a cargar unos hijos
  // Va a cargar de manera perezosa (lazy), el countries-routing.module
  {
    path: 'countries',
    // importamos el módulo que tiene el countries-routing.module
    // el "then" se ejecuta si se hace el import() correctamente.
    // En el then(), ejecuta el CountriesModule
    loadChildren: () => import('./countries/countries.module').then( module => module.CountriesModule )
  },
  // Con ** le digo que cualquier otra ruta que no sea /home /about /contact /countries,
  // se redirija al '/countries'
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [
    // Como es el router principal, se usa el '.forRoot()' y se le pasa routes
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
