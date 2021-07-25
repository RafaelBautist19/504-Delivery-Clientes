import { Component, OnInit } from '@angular/core';
import {faHome, faShoppingCart, faShoppingBag, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.css']
})
export class FootbarComponent implements OnInit {

  faHome = faHome;
  faShoppingCart = faShoppingCart;
  faShoppingBag = faShoppingBag;
  faUser = faUser

  constructor() { }

  ngOnInit(): void {
  }

}
