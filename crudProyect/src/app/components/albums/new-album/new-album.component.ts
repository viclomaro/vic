import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { AlbumService } from 'src/app/services/albumServices/album.service';
import { ArtistService } from 'src/app/services/artistServices/artist.service';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {

  formAlbum: FormGroup;
  arrArtists: Artist[];
  arrYears = [];
  arrGenre = [];

  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService,
    private router: Router) {

    this.formAlbum = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      artistId: new FormControl('', []),
      coverUrl: new FormControl('', []),
      year: new FormControl('', []),
      genre: new FormControl('', [])
    })
  }

  ngOnInit(): void {
    this.arrArtist();
    this.setArrYears();
    this.setArrgenre();
  }

  onSubmitAlbum(): void {
    const formValue = this.formAlbum.value;
    const idArtist = this.formAlbum.value.artistId;
    this.albumService.createAlbum(formValue)
      .then(response => {
        this.router.navigate([`/artistDetail/${idArtist}`]);
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  async arrArtist(): Promise<void> {
    this.arrArtists = await this.artistService.getAllArtist();
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
          this.arrGenre.push(genre.genre)
          this.arrGenre = this.arrGenre.reduce((newTempArr, myGenre) => (newTempArr.includes(myGenre) ? newTempArr : [...newTempArr, myGenre]), []);
        })
      })
      .catch(error => console.log('error', error));
  }
}
