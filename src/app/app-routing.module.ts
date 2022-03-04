import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { CartComponent } from './cart/cart.component';
import { InicioComponent } from './inicio/inicio.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {path: 'home', component: InicioComponent},
  {path: 'cart', component: CartComponent},
  {path: 'query', component: BuscadorComponent},
  

  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'**', component: Pagina404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
