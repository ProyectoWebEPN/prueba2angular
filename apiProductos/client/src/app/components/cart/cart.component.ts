import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from '../../models/producto-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public static listaProductos = []
  ramm = []
  index = 0
  productos: any;
  total = 0

  constructor() { }

  ngOnInit(): void {
    this.getListProductos();
    
  }

  getListProductos(): void{
    this.ramm = CartComponent.listaProductos
    this.ramm.forEach(
      (it)=>{
        this.total = this.total + (it.precio*it.cantidad)
      }
    )
  }

  onClickDelete(nombre){
    console.log(CartComponent.listaProductos)
    for(let i = 0; i < CartComponent.listaProductos.length; ++i){
      if (CartComponent.listaProductos[i].tipo === nombre) {
        CartComponent.listaProductos.splice(i,1);
      }
  }
    console.log(CartComponent.listaProductos)
    this.ngOnInit()
  }
}



