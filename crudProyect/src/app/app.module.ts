import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistComponent } from './components/artists/artist/artist.component';
import { AlbumComponent } from './components/albums/album/album.component';
import { NewArtistComponent } from './components/artists/new-artist/new-artist.component';
import { ArtistDetailComponent } from './components/artists/artist-detail/artist-detail.component';
import { EditArtistComponent } from './components/artists/edit-artist/edit-artist.component';
import { NewAlbumComponent } from './components/albums/new-album/new-album.component';
import { AlbumDetailComponent } from './components/albums/album-detail/album-detail.component';
import { EditAlbumComponent } from './components/albums/edit-album/edit-album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistComponent,
    AlbumComponent,
    NewArtistComponent,
    ArtistDetailComponent,
    EditArtistComponent,
    NewAlbumComponent,
    AlbumDetailComponent,
    EditAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
