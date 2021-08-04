import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LandingComponent} from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MenuRestauranteComponent } from './components/menu-restaurante/menu-restaurante.component';
import { InformacionProductoComponent } from './components/informacion-producto/informacion-producto.component';
import { DireccionEntregaComponent } from './components/direccion-entrega/direccion-entrega.component';
import { MetodoPagoComponent } from './components/metodo-pago/metodo-pago.component';

const routes: Routes = [
  { path:'', component: LandingComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'home', component: MainComponent},
  { path:'carrito', component:CarritoComponent},
  { path:'pedidos', component:PedidosComponent},
  { path:'perfil', component:PerfilComponent},
  { path:'home/id', component:MenuRestauranteComponent},
  { path: 'home/id/infoproducto/id', component:InformacionProductoComponent},
  { path: 'carrito/id/direccion-entrega', component: DireccionEntregaComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
