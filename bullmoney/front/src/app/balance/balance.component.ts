import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  arrValores: any;

  constructor() {
    this.arrValores = [];
  }

  ngOnInit(): void {
    let valoresCompra = JSON.parse(localStorage.getItem('valoresCompra'));
    console.log(valoresCompra)

    // TODO:obtener valores del array
    for (let valor of valoresCompra) {
      let compra = valor.compraNeta;
    }

    let valoresVenta = JSON.parse(localStorage.getItem('valoresVenta'));
    console.log(valoresVenta);

    for (let valor of valoresVenta) {
      let venta = valor.ventaNeta;
      return venta
    }


  }
}
