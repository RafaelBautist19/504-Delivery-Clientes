import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LandingComponent} from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path:'', component: LandingComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
