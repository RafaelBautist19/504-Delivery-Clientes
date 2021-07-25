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
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
