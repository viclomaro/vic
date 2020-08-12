import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuario: any;

  constructor() {
    this.usuario = [];
  }

  ngOnInit() {
    
    // Recuperamos usuario logado de localStorage
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }

  }

  // Cerramos sesión de usuario
  manejarCerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.reload();
  }

}
