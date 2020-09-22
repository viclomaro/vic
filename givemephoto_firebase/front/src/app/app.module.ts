import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'


import { AppRoutingModule } from '../app/routes/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CursosComponent,
    BlogComponent,
    RegistroComponent,
    ProductosComponent,
    CarritoComponent,
    DetalleCursoComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
