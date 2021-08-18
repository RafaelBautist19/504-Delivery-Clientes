import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  producto:any=null;

  
  constructor() { }

  ngOnInit(): void {
    this.producto=JSON.parse(localStorage.getItem('productos')!);
    //console.log(this.productos.nombreProducto);
  }

}
