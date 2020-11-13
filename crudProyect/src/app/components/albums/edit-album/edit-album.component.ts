import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { AlbumService } from 'src/app/services/albumServices/album.service';
import { ArtistService } from 'src/app/services/artistServices/artist.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {

  album: Album;
  arrArtists: Artist[];
  arrYears = [];
  arrGenre = [];

  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAlbum();
    this.arrArtist();
    this.setArrYears();
    this.setArrgenre();
  }

  getAlbum(): void {
    this.activatedRoute.params.subscribe(async params => {
      const id = params.id;
      if (id) {
        this.album = await this.albumService.getAlbum(id);
      }
    });
  }

  onSubmitAlbum(): void {
    const id = this.album._id;
    const album = this.album;
    this.albumService.updateAlbum(id, album)
      .then(() => this.router.navigate([`/albums/albumDetail/${id}`]))
      .catch(error => console.log('error', error));
  }

  async arrArtist(): Promise<void> {
    this.arrArtists = await this.artistService.getAllArtist()
  }

  setArrYears(): void {
    for (let i = 1909; i <= 2030; i++) {
      this.arrYears.unshift(i);
    }
  }

  setArrgenre(): void {
    this.albumService.getAllAlbums()
      .then(response => {
        response.map(genre => {
          this.arrGenre.push(genre.genre);
          this.arrGenre = this.arrGenre.reduce((newTempArr, myGenre) => (newTempArr.includes(myGenre) ? newTempArr : [...newTempArr, myGenre]), []);
        })
      })
      .catch(error => console.log('error', error));
  }

}
