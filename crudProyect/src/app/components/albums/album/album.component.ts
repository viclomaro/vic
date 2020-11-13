import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/albumServices/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.getAllAlbums();
  }

  async getAllAlbums(): Promise<void> {
    this.albums = await this.albumService.getAllAlbums();
  }

}
