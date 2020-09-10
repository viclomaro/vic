import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrWeather;
  imgMan: string;
  imgWoman: string;
  tempMax: number;
  tempMin: number;
  temp: number;
  dirWoman: string;
  dirMan: string;
  urlIcon: string;
  icon: string;

  constructor(private ApiService: ApiService) {
    this.dirWoman = "../../assets/images/women/";
    this.dirMan = "../../assets/images/men/";
    this.urlIcon = "https://v5i.tutiempo.net/wi/02/50/";
  }

  ngOnInit() {
    this.getWeather();

  }

  async getWeather() {
    // call to api 
    this.arrWeather = await this.ApiService.getWeather();
    // Set url icon
    this.setFormattedUrlIcon();
    // assign temperatures 
    this.setTemperatures();
    // get temperature 
    this.setTempValue();
    this.setWeatherTemp();

  }


  setTemperatures(): void {
    this.tempMax = this.arrWeather?.day1.temperature_max;
    this.tempMin = this.arrWeather?.day1.temperature_min;
  }


  setFormattedUrlIcon(): void {
    this.icon = this.arrWeather?.day1.icon;
    this.urlIcon = `${this.urlIcon}${this.icon}.png`;
  }

  setTempValue(): void {
    this.temp = this.tempMax + this.tempMin;
  }

  setWeatherTemp(): void {
    const tempString = this.temp.toString();
    const tempFirstNumber = parseInt(tempString.charAt(0));
    const tempSecondNumber = parseInt(tempString.charAt(1));
    const imageNumber = tempSecondNumber > 5 ? 5 : 0;
    this.imgWoman = `${this.dirWoman}${tempFirstNumber}${imageNumber}.jpg`;
    this.imgMan = `${this.dirMan}${tempFirstNumber}${imageNumber}.jpg`;
  }


}



