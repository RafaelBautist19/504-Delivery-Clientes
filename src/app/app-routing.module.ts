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

const routes: Routes = [
  { path:'', component: LandingComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'home', component: MainComponent},
  { path:'carrito', component:CarritoComponent},
  { path:'pedidos', component:PedidosComponent},
  { path:'perfil', component:PerfilComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
