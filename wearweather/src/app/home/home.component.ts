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

  constructor(private ApiService: ApiService) {

  }

  async ngOnInit() {
    /* call to api */
    this.arrWeather = await this.ApiService.getWeather();
    /* assign temperatures */
    this.tempMax = this.arrWeather?.day1.temperature_max;
    this.tempMin = this.arrWeather?.day1.temperature_min;
    /* get temperature */
    this.tempValue(this.tempMax, this.tempMin);
    this.weatherTemp(39);
  }

  tempValue(tempMax, tempMin): void {
    this.temp = (tempMax + tempMin);
  }

  weatherTemp(temperature): void {
    if (temperature >= 60) {
      this.imgWoman = "../../assets/images/women/women spring3 spr.jpg";
      this.imgMan = "../../assets/images/men/men spring 3 spr.jpg";
    } else if (temperature > 45 && temperature < 60) {
      this.imgWoman = "../../assets/images/women/women spring2 spr.jpg";
      this.imgMan = "../../assets/images/men/men spring 2 spr.jpg";
    } else if (temperature > 30 && temperature < 45) {
      this.imgWoman = "../../assets/images/women/women spring2 spr.jpg";
      this.imgMan = "../../assets/images/men/men spring 2 spr.jpg";
    } else if (temperature > 15 && temperature < 30) {
      this.imgWoman = "../../assets/images/women/women spring2 spr.jpg";
      this.imgMan = "../../assets/images/men/men spring 2 spr.jpg";
    } else if (temperature > 10 && temperature < 15) {
      this.imgWoman = "../../assets/images/women/women spring2 spr.jpg";
      this.imgMan = "../../assets/images/men/men spring 2 spr.jpg";
    } else if (temperature > 0 && temperature < 10) {
      this.imgWoman = "../../assets/images/women/women spring2 spr.jpg";
      this.imgMan = "../../assets/images/men/men spring 2 spr.jpg";
    }


  }


}
