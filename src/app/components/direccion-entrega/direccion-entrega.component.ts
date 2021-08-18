import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-direccion-entrega',
  templateUrl: './direccion-entrega.component.html',
  styleUrls: ['./direccion-entrega.component.css']
})



export class DireccionEntregaComponent implements OnInit {
  lat:number = 0;
  lng:number = 0;

  ubicacionEntrega:any;

  producto:any;

  clienteActual:any = localStorage.getItem('clientID');
  cliente:any;

  envio:number = 30;
  monto:number = 0;

  constructor(private clientesService:ClientesService){}

  opcionSeleccionada:string = '';
  
  getClientLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude
        console.log(this.lat);
        console.log(this.lng);
      })
    }
  }

  private map!: google.maps.Map;

  ngOnInit(): void {

    this.clientesService.informacionCliente(this.clienteActual).subscribe(
      res=>{
        this.cliente = res;
      },
      error=>{
        console.log(error);
      }
    )

    this.producto=JSON.parse(localStorage.getItem('productos')!);

    let loader = new Loader({
      apiKey: 'AIzaSyCBN7dfD0vWowUlEaDGg9zY_47VRnDbJkc'
    })

    this.getClientLocation();

    loader.load().then(() => {

      var location = { lat: this.lat, lng: this.lng }

      this.ubicacionEntrega = location;

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 18
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        draggable: true,
        title: `${location}`
      });
    })
  }

  realizarPedido(){
    if(this.opcionSeleccionada === ''){
      alert('Seleccione un metodo de Pago');
    }
    
    var clientePedido={
      nombreCliente: `${this.cliente.nombre} ${this.cliente.apellido}`,
      telefono: this.cliente.telefono,
      idCliente: this.cliente._id
    }
    
    console.log('Metodo de Pago:', this.opcionSeleccionada);
    console.log('Direccion:', this.ubicacionEntrega);
    console.log('Producto:', this.producto);
    console.log('Cliente:', clientePedido);
    console.log('Envio:', this.envio);
    console.log('Monto:', this.envio + (this.producto.precio * this.producto.cantidad));

  }

}
