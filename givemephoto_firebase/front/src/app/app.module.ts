import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CursosComponent } from './cursos/cursos.component';
import { BlogComponent } from './blog/blog.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { UserComponent } from './user/user.component';



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
