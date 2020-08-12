import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tecnicas: any[];
  nocturna: string;
  naturaleza: string;
  retrato: string;
  macro: string;
  productos: any;
  precioMin: number;
  precioMax: number;
  tecnicanaturaleza: boolean;
  tecnicanocturna: boolean;
  tecnicaretrato: boolean;
  tecnicamacro: boolean;
  mostrarNoResultados: boolean;


  constructor(private homeservice: HomeService, private router: Router) {
    this.tecnicas = [];
    this.tecnicanaturaleza = false;
    this.tecnicanocturna = false;
    this.tecnicaretrato = false;
    this.tecnicamacro = false;
    this.mostrarNoResultados = false;
  }

  ngOnInit() {

    // Al entrar en la página carga desde arriba del todo.
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }


  // Seleccionamos tecnicanaturaleza del cuestionario
  manejarTecnicaNaturaleza(event) {
    if (event.target.checked) {
      this.tecnicanaturaleza = true;
      this.naturaleza = 'tecnicanaturaleza';
      this.tecnicas.push(this.naturaleza);
    } else {
      this.tecnicanaturaleza = false;
    }

  }

  // Seleccionamos tecnicanocturna del cuestionario
  manejarTecnicaNocturna(event) {
    if (event.target.checked) {
      this.tecnicanocturna = true;
      this.nocturna = 'tecnicanocturna';
      this.tecnicas.push(this.nocturna);
    } else {
      this.tecnicanocturna = false;
      this.tecnicas.pop();
    }

  }

  // Seleccionamos tecnicaretrato del cuestionario
  manejarTecnicaRetrato(event) {
    if (event.target.checked) {
      this.tecnicaretrato = true;
      this.retrato = 'tecnicaretrato';
      this.tecnicas.push(this.retrato);
    } else {
      this.tecnicanocturna = false;
    }

  }

  // Seleccionamos tecnicamacro del cuestionario
  manejarTecnicaMacro(event) {
    if (event.target.checked) {
      this.tecnicamacro = true;
      this.macro = 'tecnicamacro';
      this.tecnicas.push(this.macro);
    } else {
      this.tecnicanocturna = false;
    }

  }

  // Seleccionamos precio cuestionario
  async manejarCheckPrecio($event) {
    switch (parseInt($event.target.value)) {
      case 0:
        this.precioMin = 10;
        this.precioMax = 260;
        break;

      case 1:
        this.precioMin = 260;
        this.precioMax = 500;
        break;

      case 2:
        this.precioMin = 550;
        this.precioMax = 1000;
        break;

      case 3:
        this.precioMin = 1100;
        this.precioMax = 2100;
        break;

      default:

    };
  }

  // Enviamos los datos seleccionados del cuestionario y los enviamos a la petición.
  async manejarResultado() {
    const tecnicas = {
      tecnicas: this.tecnicas,
      precioMin: this.precioMin,
      precioMax: this.precioMax,
    }

    await this.homeservice.enviarCuestionarioTecnica(tecnicas);
    this.productos = await this.homeservice.enviarCuestionarioTecnica(tecnicas);
    localStorage.setItem('cuestionario', JSON.stringify(this.productos));

    if (this.productos === null) {
      this.mostrarNoResultados = true;
    } else {
      this.router.navigate(['/productos']);
    }

  }


}
