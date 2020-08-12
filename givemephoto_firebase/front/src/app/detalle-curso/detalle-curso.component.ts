import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {

  cursos: any[];

  constructor(private cursosService: CursosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Recuperamos el nivel de la url
    this.activatedRoute.params.subscribe(async params => {
      this.cursos = await this.cursosService.getByNivel(params.nivel);
    })

    // Al entrar en la página carga desde arriba del todo.
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  // Añadimos el curso al detalle de pedidos del perfil 
  clickAddCurso(pCurso) {
    this.cursosService.enviarPedidoCurso(pCurso);
  }


}
