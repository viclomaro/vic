import { Injectable } from '@angular/core';
import { GlobalAlbum } from '../global';
import { HttpClient } from '@angular/common/http';
import { Album } from '../../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAllAlbums(): Promise<Album[]> {
    return this.http.get<Album[]>(GlobalAlbum.allAlbumUrl).toPromise();
  }

  getAlbum(id): Promise<Album> {
    return this.http.get<Album>(`${GlobalAlbum.albumUrl}${id}`).toPromise();
  }

  createAlbum(album) {
    return this.http.post(GlobalAlbum.createAlbumUrl, album).toPromise();
  }

  updateAlbum(id, album) {
    return this.http.put(`${GlobalAlbum.updateAlbumUrl}${id}`, album).toPromise();
  }

  deleteAlbum(id) {
    return this.http.delete(`${GlobalAlbum.deleteAlbumUrl}${id}`).toPromise();
  }
}
