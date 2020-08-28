import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.tutiempo.net/json/?lan=es&apid=4sTzqXX4Xz4zM7v&lid=3768'
  }

  getWeather(): Promise<any[]> {
    return this.http.get<any[]>(this.baseUrl).toPromise();
  }
}
