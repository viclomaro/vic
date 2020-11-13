import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/albumServices/album.service';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumservice: AlbumService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    this.activatedRoute.params.subscribe(async params => {
      const id = params.id;
      if (id) {
        this.album = await this.albumservice.getAlbum(id);
      }
    });
  }

  redirectToEdit(id): void {
    this.router.navigate([`albums/editAlbum/${id}`]);
  }

  async deleteAlbum(id): Promise<void> {
    const artistId = this.album.artistId;
    await this.albumservice.deleteAlbum(id);
    this.router.navigate([`artistDetail/${artistId}`]);
  }

}

