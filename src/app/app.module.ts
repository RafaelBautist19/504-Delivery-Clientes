import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const router: Routes = [
  // {
  //   path: 'signup',
  //   component: SignUpComponent
  // }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(router),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
