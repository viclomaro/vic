import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './components/albums/album/album.component';
import { ArtistDetailComponent } from './components/artists/artist-detail/artist-detail.component';
import { ArtistComponent } from './components/artists/artist/artist.component';
import { EditArtistComponent } from './components/artists/edit-artist/edit-artist.component';
import { NewArtistComponent } from './components/artists/new-artist/new-artist.component';
import { NewAlbumComponent } from './components/albums/new-album/new-album.component';
import { AlbumDetailComponent } from './components/albums/album-detail/album-detail.component';
import { EditAlbumComponent } from './components/albums/edit-album/edit-album.component';


const routes: Routes = [
  { path: '', component: ArtistComponent },
  { path: 'newArtist', component: NewArtistComponent },
  { path: 'artistDetail/:id', component: ArtistDetailComponent },
  { path: 'editArtist/:id', component: EditArtistComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'newAlbum', component: NewAlbumComponent },
  { path: 'albums/albumDetail/:id', component: AlbumDetailComponent },
  { path: 'albums/editAlbum/:id', component: EditAlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
