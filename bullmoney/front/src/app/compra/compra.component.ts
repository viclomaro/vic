import { Component, OnInit } from '@angular/core';
import { Valor } from '../../models/valor';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  form: any;
  total: boolean;
  arrValoresCompra: Array<Valor>;

  // TODO: Hacer validaciones
  constructor() {
    this.form = {
      buyDate: '',
      accion: '',
      titulos: '',
      precioAccion: '',
      compraTotal: '',
      comision: '',
      compraNeta: '',
      evento: 'compra'
    }
    this.total = false;
    this.arrValoresCompra = [];
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.titulos && this.form.precioAccion != '') {
      this.total = true;
      this.form.compraNeta = this.form.titulos * this.form.precioAccion;
      this.form.compraTotal = this.form.compraNeta + this.form.comision;
    }
  }

  validarCompra() {
    this.arrValoresCompra.push(this.form);
    localStorage.setItem('valoresCompra', JSON.stringify(this.arrValoresCompra));
    this.form = {};
  }

}
