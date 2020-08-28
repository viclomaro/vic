import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrWeather;

  constructor(private ApiService: ApiService) { }

  async ngOnInit() {
    this.arrWeather = await this.ApiService.getWeather();
    console.log(this.arrWeather);
  }


}
