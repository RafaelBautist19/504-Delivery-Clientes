import { Component, OnInit } from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-restaurante',
  templateUrl: './menu-restaurante.component.html',
  styleUrls: ['./menu-restaurante.component.css']
})
export class MenuRestauranteComponent implements OnInit {
  
  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
