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
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:'', component: LandingComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'home', component: MainComponent, canActivate:[AuthGuard]},
  { path:'carrito', component:CarritoComponent, canActivate:[AuthGuard]},
  { path:'pedidos', component:PedidosComponent, canActivate:[AuthGuard]},
  { path:'perfil', component:PerfilComponent, canActivate:[AuthGuard]},
  { path:'home/:idRestaurante', component:MenuRestauranteComponent, canActivate:[AuthGuard]},
  { path: 'home/:idRestaurante/infoproducto/:idProducto', component:InformacionProductoComponent, canActivate:[AuthGuard]},
  { path: 'carrito/realizar-pedido', component: DireccionEntregaComponent, canActivate:[AuthGuard]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
