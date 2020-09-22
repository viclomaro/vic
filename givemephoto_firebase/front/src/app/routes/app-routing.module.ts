import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { CursosComponent } from '../components/cursos/cursos.component';
import { RegistroComponent } from '../components/registro/registro.component';
import { BlogComponent } from '../components/blog/blog.component';
import { ProductosComponent } from '../components/productos/productos.component';
import { CarritoComponent } from '../components/carrito/carrito.component';
import { DetalleCursoComponent } from '../components/detalle-curso/detalle-curso.component';
import { UserComponent } from '../components/user/user.component';
import { LoginGuard } from '../login.guard';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:categoria', component: ProductosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nivel', component: DetalleCursoComponent },
  { path: 'user', component: UserComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'carrito', component: CarritoComponent, canActivate: [LoginGuard] },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
