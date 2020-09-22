import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://givemephotoback.herokuapp.com/productos';
  }


  // Obtenemos todos los productos
  getAll(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();
  }


  // Obtenemos los productos por categoria
  getByCategoria(pCategoria): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pCategoria}`).toPromise();
  }


  // Obtenemos las cámaras por marca
  getByMarcaCamara(pMarca): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/marca/camaras/${pMarca}`).toPromise();
  }


  // Obtenemos los objetivos por marca
  getByMarcaObjetivo(pMarca): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/marca/objetivos/${pMarca}`).toPromise();
  }


  // Obtenemos los accesorios por marca
  getByMarcaAccesorio(pMarca): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/marca/accesorios/${pMarca}`).toPromise();
  }


  // Obtenemos productos por resolución
  getByResolucion(pResMin, pResMax): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/resolucion/${pResMin}/${pResMax}`).toPromise();
  }


  // Obtenemos productos por iso
  getByIso(pIsoMin, pIsoMax): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/iso/${pIsoMin}/${pIsoMax}`).toPromise();
  }


  // Obtenemos productos por focal
  getByFocal(pFocalMin, pFocalMax): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/focal/${pFocalMin}/${pFocalMax}`).toPromise();
  }


  // Obtenemos productos por rango de precio
  getByPrecio(pPrecioMin, pPrecioMax): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/precio/${pPrecioMin}/${pPrecioMax}`).toPromise();
  }

}
