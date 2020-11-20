import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  arrWeather;
  getIcon2: string;
  getIcon3: string;
  getIcon4: string;
  getIcon5: string;


  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getWeather();

  }

  async getWeather() {
    this.arrWeather = await this.ApiService.getWeather();
    this.setFormattedUrlIcon();
    //console.log(this.arrWeather);
  }

  setFormattedUrlIcon(): void {
    const urlIcon = "https://v5i.tutiempo.net/wi/02/50/";
    const icon2 = this.arrWeather.day2.icon;
    const icon3 = this.arrWeather.day3.icon;
    const icon4 = this.arrWeather.day5.icon;
    const icon5 = this.arrWeather.day5.icon;
    
    this.getIcon2 = `${urlIcon}${icon2}.png`;
    this.getIcon3 = `${urlIcon}${icon3}.png`;
    this.getIcon4 = `${urlIcon}${icon4}.png`;
    this.getIcon5 = `${urlIcon}${icon5}.png`;

  }

}
