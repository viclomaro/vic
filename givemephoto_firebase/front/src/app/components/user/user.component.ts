import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario: any;
  pedidos: any;
  productos: any;
  pedidoCurso: any;
  cursos: any;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.pedidos = [];
    this.pedidoCurso = [];
    this.productos = [];
  }

  ngOnInit() {
    // Recuperamos usuario de localStorage
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));

      // Al entrar en la página carga desde arriba del todo.
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0)
      });
    }


    // Recuperamos pedidos de usuario
    this.usuarioService.getPedidosUser()
      .then(response => {
        if (response['error']) {
          localStorage.removeItem('token');
          confirm('Tu sesion ha caducado, logueate de nuevo');
          window.location.reload();
          localStorage.removeItem('usuario');
          this.router.navigate(['/registro']);
        } else {
          this.pedidos = response;
        }
      })
      .catch(err => {
        console.log(err)
      });

    // Recuperamos los cursos
    this.usuarioService.getAllDetalleCurso()
      .then(response => {
        this.pedidoCurso = response;
      })
      .catch(err => {
        console.log(err)
      });
  }

}









