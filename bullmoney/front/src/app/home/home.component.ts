import { Component, OnInit } from '@angular/core';
import { Valor } from '../../models/valor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: any;
  total: boolean;
  arrValores: Array<Valor>;

  // TODO: Hacer validaciones
  constructor() {
    this.form = {
      buyDate: '',
      accion: '',
      titulos: '',
      precioAccion: '',
      compraTotal: '',
      comision: '',
      compraNeta: ''
    }
    this.total = false;
    this.arrValores = [];

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
    this.arrValores.push(this.form);
    localStorage.setItem('valores', JSON.stringify(this.arrValores));
    this.form = {};
  }

}
