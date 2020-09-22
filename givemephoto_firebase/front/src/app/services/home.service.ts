import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/productos/tecnicas";
  }

  // Enviamos y obtenemos productos por su técnica
  enviarCuestionarioTecnica(pTecnicas) {
    return this.httpClient.post(`${this.baseUrl}`, pTecnicas).toPromise();
  }

}
