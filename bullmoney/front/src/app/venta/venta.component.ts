import { Component, OnInit } from '@angular/core';
import { Valor } from '../../models/valor';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  form: any;
  total: boolean;
  arrValoresVenta: Array<Valor>;

  constructor() {
    this.form = {
      sellDate: '',
      accion: '',
      titulos: '',
      precioAccion: '',
      ventaTotal: '',
      comision: '',
      compraNeta: '',
      evento: 'venta'
    }
    this.total = false;
    this.arrValoresVenta = [];
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.titulos && this.form.precioAccion != '') {
      this.total = true;
      this.form.ventaNeta = this.form.titulos * this.form.precioAccion;
      this.form.ventaTotal = this.form.ventaNeta + this.form.comision;
    }
  }

  validarventa() {
    this.arrValoresVenta.push(this.form);
    localStorage.setItem('valoresVenta', JSON.stringify(this.arrValoresVenta));
    this.form = {};
  }

}
