import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artistServices/artist.service';
import { Artist } from '../../../models/artist';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [ArtistService],
})
export class ArtistComponent implements OnInit {

  allArtist: Artist[];
  artist: Artist;

  constructor(private artistService: ArtistService, private router: Router) { }

  ngOnInit(): void {
    this.getAllArtist();
  }

  async getAllArtist(): Promise<void> {
    this.allArtist = await this.artistService.getAllArtist();
  }

  async getArtist(id): Promise<void> {
    this.artist = await this.artistService.getArtist(id);
  }

  async deleteArtist(id): Promise<void> {
    await this.artistService.deleteArtist(id);
    this.getAllArtist();
  }

}
