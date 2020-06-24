import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html',
  styleUrls: ['./bolsa.component.css']
})
export class BolsaComponent implements OnInit {

  valoresCompra: any;
  valoresVenta: any;

  constructor() {
    this.valoresCompra = JSON.parse(localStorage.getItem("valoresCompra"));
    console.log(this.valoresCompra);
    this.valoresVenta = JSON.parse(localStorage.getItem("valoresVenta"));
    console.log(this.valoresVenta);
  }

  ngOnInit(): void {
  }

}
