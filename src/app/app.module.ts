import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { FootbarComponent } from './components/footbar/footbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MenuRestauranteComponent } from './components/menu-restaurante/menu-restaurante.component';
import { InformacionProductoComponent } from './components/informacion-producto/informacion-producto.component';
import { DireccionEntregaComponent } from './components/direccion-entrega/direccion-entrega.component';
import { MetodoPagoComponent } from './components/metodo-pago/metodo-pago.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// const router: Routes = [
//   {
//     path: 'signup',
//     component: SignUpComponent
//   }
// ]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    LandingComponent,
    FootbarComponent,
    NavbarComponent,
    CarritoComponent,
    PedidosComponent,
    PerfilComponent,
    MenuRestauranteComponent,
    InformacionProductoComponent,
    DireccionEntregaComponent,
    MetodoPagoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
