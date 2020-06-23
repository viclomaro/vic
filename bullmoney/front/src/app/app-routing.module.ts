import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BolsaComponent } from './bolsa/bolsa.component';
import { BalanceComponent } from './balance/balance.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bolsa', component: BolsaComponent },
  { path: 'balance', component: BalanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
