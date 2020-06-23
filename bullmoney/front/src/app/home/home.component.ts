import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: any;
  total: boolean;

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

  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('Formulario enviado');
    console.log(this.form);
    if (this.form.titulos && this.form.precioAccion != '') {
      this.total = true;
    }
    this.form.compraNeta = this.form.titulos * this.form.precioAccion;
    this.form.compraTotal = this.form.compraNeta + this.form.comision;
  }

  validarCompra() {

    console.log(this.form.totalCompra)
  }

  calculoTotal(titulos, precioAccion) {
    let total = titulos * precioAccion;
    console.log(total)
    return total;
  }





}
