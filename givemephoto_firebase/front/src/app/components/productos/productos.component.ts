import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[];
  totalRecords: number;
  page: number = 1;
  mostrarBorrarCuestionario: boolean;
  mostrarFiltroCamaras: boolean;
  mostrarFiltroObjetivos: boolean;
  mostrarFiltroAccesorios: boolean;
  mostrarFiltroPrecio: boolean;
  mostrarDeshacerFiltro: boolean;
  mostrarCaracteristicas: boolean;
  cargando: boolean;
  mostrarProductos: boolean;

  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute, private router: Router, private carritoService: CarritoService) {
    this.productos = new Array<any>();
    this.mostrarBorrarCuestionario = false;
    this.mostrarFiltroCamaras = false;
    this.mostrarFiltroObjetivos = false;
    this.mostrarFiltroAccesorios = false;
    this.mostrarFiltroPrecio = false;
    this.mostrarDeshacerFiltro = false;
    this.mostrarCaracteristicas = false;
    this.cargando = true;
    this.mostrarProductos = false;
  }


  ngOnInit() {

    // Comprueba si se ha filtrado desde el cuestionario
    if (localStorage.getItem('cuestionario')) {
      this.productos = JSON.parse(localStorage.getItem('cuestionario'));
      this.mostrarBorrarCuestionario = true;
    } else {
      // Obtener todos los productos o filtrados por categoria
      this.activatedRoute.params.subscribe(async params => {

        if (!params.categoria) {
          this.productos = await this.productosService.getAll();
        } else {
          this.productos = await this.productosService.getByCategoria(params.categoria);
        }
        this.cargando = this.productos.length > 0 ? false : true;
        this.mostrarProductos = this.productos.length > 0 ? true : false;
      });
    }


    // Al entrar en la página carga desde arriba del todo.
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

  }


  // Borrar filtrado del cuestionario
  async borrarCuestionario() {
    localStorage.removeItem('cuestionario');
    this.productos = await this.productosService.getAll();
    this.mostrarBorrarCuestionario = false;
  }


  // Agregar producto al carrito
  enviarProducto(producto) {
    this.carritoService.agregarProducto(producto);
  }


  // Filtrar por marca de camaras
  async manejarCheckMarca($event) {
    this.productos = await this.productosService.getByMarcaCamara($event.target.value);
    this.mostrarDeshacerFiltro = true;
  }


  // Filtrar por resolucion de camaras
  async manejarCheckResolucion($event) {
    this.mostrarDeshacerFiltro = true;
    switch (parseInt($event.target.value)) {
      case 0:
        this.productos = await this.productosService.getByResolucion(12, 17);
        break;

      case 1:
        this.productos = await this.productosService.getByResolucion(18, 25);
        break;

      case 2:
        this.productos = await this.productosService.getByResolucion(30, 36);
        break;

      default:
        this.productos = await this.productosService.getAll();
    };
  }


  // Filtrar por iso de camaras
  async manejarCheckIso($event) {
    this.mostrarDeshacerFiltro = true;
    switch (parseInt($event.target.value)) {
      case 0:
        this.productos = await this.productosService.getByIso(6300, 12900);
        break;

      case 1:
        this.productos = await this.productosService.getByIso(25500, 51300);
        break;

      case 2:
        this.productos = await this.productosService.getByIso(100000, 521300);
        break;

      default:
        this.productos = await this.productosService.getAll();
    };
  }


  // Filtrar por marca de objetivo
  async manejarCheckObjetivo($event) {
    this.productos = await this.productosService.getByMarcaObjetivo($event.target.value);
    this.mostrarDeshacerFiltro = true;
  }


  // Filtrar por focal de objetivo
  async manejarCheckFocal($event) {
    this.mostrarDeshacerFiltro = true;
    switch (parseInt($event.target.value)) {
      case 0:
        this.productos = await this.productosService.getByFocal(15, 25);
        break;

      case 1:
        this.productos = await this.productosService.getByFocal(25, 51);
        break;

      case 2:
        this.productos = await this.productosService.getByFocal(52, 86);
        break;

      default:
        this.productos = await this.productosService.getAll();
    };
  }


  // Filtrar por marca de accesorio
  async manejarCheckAccesorios($event) {
    this.productos = await this.productosService.getByMarcaAccesorio($event.target.value);
    this.mostrarDeshacerFiltro = true;
  }

  // Filtrar por rango precio
  async manejarCheckPrecio($event) {
    this.mostrarDeshacerFiltro = true;
    switch (parseInt($event.target.value)) {
      case 0:
        this.productos = await this.productosService.getByPrecio(10, 251);
        break;

      case 1:
        this.productos = await this.productosService.getByPrecio(275, 501);
        break;

      case 2:
        this.productos = await this.productosService.getByPrecio(550, 1001);
        break;

      case 3:
        this.productos = await this.productosService.getByPrecio(1100, 2100);
        break;

      default:
        this.productos = await this.productosService.getAll();
    };
  }


  // Borrar filtro
  async manejarDeshacerFiltro() {
    this.mostrarDeshacerFiltro = false;
    this.productos = await this.productosService.getAll();
  }


  // Mostrar/ocultar filtro de camaras
  manejarMostrarFiltroCamaras() {
    if (this.mostrarFiltroCamaras != true) {
      this.mostrarFiltroCamaras = true;
    } else {
      this.mostrarFiltroCamaras = false;
    }

  }


  // Mostrar/ocultar filtro de objetivos
  manejarMostrarFiltroObjetivos() {
    if (this.mostrarFiltroObjetivos != true) {
      this.mostrarFiltroObjetivos = true;
    } else {
      this.mostrarFiltroObjetivos = false;
    }

  }


  // Mostrar/ocultar filtro de accesorios
  manejarMostrarFiltroAccesorios() {
    if (this.mostrarFiltroAccesorios != true) {
      this.mostrarFiltroAccesorios = true;
    } else {
      this.mostrarFiltroAccesorios = false;
    }

  }


  // Mostrar/ocultar filtro de precio
  manejarMostrarFiltroPrecio() {
    if (this.mostrarFiltroPrecio != true) {
      this.mostrarFiltroPrecio = true;
    } else {
      this.mostrarFiltroPrecio = false;
    }

  }


}
