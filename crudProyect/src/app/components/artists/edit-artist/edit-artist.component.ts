import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artistServices/artist.service';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent implements OnInit {

  artist: Artist;

  constructor(
    private artistService: ArtistService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getArtist();
  }

  getArtist(): void {
    this.activatedRoute.params.subscribe(async params => {
      const id = params.id;
      if (id) {
        this.artist = await this.artistService.getArtist(id);
      }
    });
  }

  onSubmitArtist(): void {
    const id = this.artist._id;
    this.artistService.updateArtist(id, this.artist)
      .then(() => this.router.navigate(['/']))
      .catch(error => console.log('error', error));
  }

}

