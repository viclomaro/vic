import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { AlbumService } from 'src/app/services/albumServices/album.service';
import { ArtistService } from 'src/app/services/artistServices/artist.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  artist: Artist;
  album;
  idArtist: string;
  albumList: Album[];

  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getIdArtist();
    this.getArtist();
    this.getAlbumList();
  }

  getIdArtist(): void {
    this.activatedRoute.params.subscribe(params => this.idArtist = params.id);
  }

  async getArtist(): Promise<void> {
    this.artist = await this.artistService.getArtist(this.idArtist);
  }

  getAlbumList(): void {
    this.album = this.albumService.getAllAlbums()
      .then(response => this.albumList = response.filter(data => data.artistId === this.idArtist))
      .catch(error => console.log(error));
  }

  redirectToDetail(id): void {
    this.router.navigate([`albums/albumDetail/${id}`]);
  }

}

