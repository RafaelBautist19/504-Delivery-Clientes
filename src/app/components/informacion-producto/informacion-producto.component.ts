import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.css']
})
export class InformacionProductoComponent implements OnInit {

  agregarProductoCarrito = new FormGroup({

  });

  constructor() { }

  ngOnInit(): void {
  }

}
