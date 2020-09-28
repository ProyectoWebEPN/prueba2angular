import { Component, OnInit, IterableDiffers } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductoInterface} from 'src/app/models/producto-interface';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public producto: ProductoInterface = {
    tipo: "",
    marca: "",
    precio: 0,
    color: ""
  };
  public cantidada = 1

  ngOnInit(): void {
    const producto_id = this.route.snapshot.params["id"];
    this.getDetalle(producto_id);
  }

  getDetalle(id: string) {
    this.dataApi.getProductoID(id)
    .subscribe(producto => (this.producto = producto));

  }

  onClickPlus(){this.cantidada++;}
  onClickMinus(){if (this.cantidada > 0) {
    this.cantidada--
  }}
  onKey(event) {this.cantidada = event.target.value;}

  saveProductoToCart(){
    CartComponent.listaProductos.push({"tipo":this.producto.tipo,
    "marca":this.producto.marca,
    "precio":this.producto.precio,
    "color":this.producto.color,
    "cantidad":this.cantidada})
    alert("Añadido al carro de compras")
    this.cantidada = 0
    console.log(CartComponent.listaProductos)
  }

}
