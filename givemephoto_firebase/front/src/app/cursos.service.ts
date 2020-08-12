import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  baseUrl: string;
  baseUrlDetalleCurso: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/cursos';
    this.baseUrlDetalleCurso = 'http://localhost:3000/api/detalleCursos';

  }


  // Recuperamos cursos de BBDD por nivel seleccionado
  getByNivel(pNivel): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pNivel}`).toPromise();
  }


  // Añadimos curso seleccionado a BBDD
  enviarPedidoCurso(pCurso) {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('token')
      })
    }
    return this.httpClient.post(`${this.baseUrlDetalleCurso}`, pCurso, httpOptions).toPromise();
  }


}
