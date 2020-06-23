import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/* import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BolsaComponent } from './bolsa/bolsa.component';
import { BalanceComponent } from './balance/balance.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BolsaComponent,
    BalanceComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    /*  BsDatepickerModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
