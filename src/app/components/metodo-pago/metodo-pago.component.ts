import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css']
})
export class MetodoPagoComponent implements OnInit {

  opcionSeleccionada:string = '';
  verMetodoSeleccionado:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  metodoPagoSeleccionado(){
    this.verMetodoSeleccionado = this.opcionSeleccionada;
  }

}
