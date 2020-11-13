import { Injectable } from '@angular/core';
import { GlobalArtist } from '../../services/global';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getAllArtist(): Promise<Artist[]> {
    return this.http.get<Artist[]>(GlobalArtist.allArtistUrl).toPromise();
  }

  getArtist(id): Promise<Artist> {
    return this.http.get<Artist>(`${GlobalArtist.artistUrl}${id}`).toPromise();
  }

  createArtist(artist) {
    return this.http.post(GlobalArtist.createArtistUrl, artist).toPromise();
  }

  updateArtist(id, artist) {
    return this.http.put(`${GlobalArtist.updateArtistUrl}${id}`, artist).toPromise();
  }

  deleteArtist(id) {
    return this.http.delete(`${GlobalArtist.deleteArtistUrl}${id}`).toPromise();
  }

}
