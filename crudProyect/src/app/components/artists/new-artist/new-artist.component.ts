import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artistServices/artist.service';

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.component.html',
  styleUrls: ['./new-artist.component.css']
})
export class NewArtistComponent implements OnInit {

  formArtist: FormGroup;

  constructor(private artistService: ArtistService, private router: Router) {

    this.formArtist = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      photoUrl: new FormControl('', []),
      birthdate: new FormControl('', []),
      deathDate: new FormControl('', [])
    });
  }

  ngOnInit(): void {
  }

  onSubmitArtist(): void {
    const formValue = this.formArtist.value;
    this.artistService.createArtist(formValue)
      .then(() => this.router.navigate(['/']))
      .catch(error => console.log('error', error));
  }

}


