import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  arrCarrito: any[];
  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = "http://localhost:3000/api/pedidos/carrito";

    if (localStorage.getItem('carritoPedido')) {
      this.arrCarrito = JSON.parse(localStorage.getItem('carritoPedido'));
    } else {
      this.arrCarrito = [];
    }

  }


  // Recuperamos productos del carrito
  recuperarCarrito() {
    return this.arrCarrito;
  }


  // Añadimos producto al carrito
  agregarProducto(pProducto) {
    this.arrCarrito.push(pProducto)
    localStorage.setItem('carritoPedido', JSON.stringify(this.arrCarrito));
  }


  // Borramos producto del carrito
  borrarProducto(pId) {
    for (let i = 0; i < this.arrCarrito.length; i++) {
      if (pId === this.arrCarrito[i].id) {
        this.arrCarrito.splice(i, 1);
        localStorage.setItem('carritoPedido', JSON.stringify(this.arrCarrito));
      }
    };
  }


  // Enviamos pedido a BBDD
  enviarPedido(pPedido) {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('token')
      })
    }
    return this.httpClient.post(`${this.baseUrl}`, pPedido, httpOptions).toPromise();
  }


}

