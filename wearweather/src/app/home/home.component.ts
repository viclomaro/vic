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
    this.weatherTemp(this.temp);
  }

  tempValue(tempMax, tempMin): void {
    this.temp = (tempMax + tempMin);
  }

  weatherTemp(temperature): void {
    switch (true) {
      /* summer */
      case temperature >= 80:
        this.imgWoman = "../../assets/images/women/summer/women summer 80+.jpg";
        this.imgMan = "../../assets/images/men/summer/men summer 80+.jpg";
        break;
      case temperature >= 70 && temperature < 80:
        this.imgWoman = "../../assets/images/women/summer/women summer 70-80.jpg";
        this.imgMan = "../../assets/images/men/summer/men summer 70-80.jpg";
        break;
      case temperature >= 65 && temperature < 70:
        this.imgWoman = "../../assets/images/women/summer/women summer 65-70.jpg";
        this.imgMan = "../../assets/images/men/summer/men summer 65-70.jpg";
        break;
      case temperature >= 60 && temperature < 65:
        this.imgWoman = "../../assets/images/women/summer/women summer 60-65.jpg";
        this.imgMan = "../../assets/images/men//summer/men summer 60-65.jpg";
        break;
      /* spring */
      case temperature >= 50 && temperature < 60:
        this.imgWoman = "../../assets/images/women/spring/women spring 50-60.jpg";
        this.imgMan = "../../assets/images/men/spring/men spring 50-60.jpg";
        break;
      case temperature >= 45 && temperature < 50:
        this.imgWoman = "../../assets/images/women/spring/women spring 45-50.jpg";
        this.imgMan = "../../assets/images/men/spring/men spring 45-50.jpg";
        break;
      case temperature >= 35 && temperature < 45:
        this.imgWoman = "../../assets/images/women/spring/women spring 35-45.jpg";
        this.imgMan = "../../assets/images/men/spring/men spring 35-45.jpg";
        break;
      /* fall */
      case temperature >= 30 && temperature < 35:
        this.imgWoman = "../../assets/images/women/fall/women fall 30-35.jpg";
        this.imgMan = "../../assets/images/men/fall/men fall 30-35.jpg";
        break;
      case temperature >= 25 && temperature < 30:
        this.imgWoman = "../../assets/images/women/fall/women fall 25-30.jpg";
        this.imgMan = "../../assets/images/men/fall/men fall 25-30.jpg";
        break;
      case temperature >= 20 && temperature < 25:
        this.imgWoman = "../../assets/images/women/fall/women fall 20-25.jpg";
        this.imgMan = "../../assets/images/men/fall/men fall 20-25.jpg";
        break;
      /* winter */
      case temperature >= 15 && temperature < 20:
        this.imgWoman = "../../assets/images/women/winter/women winter 15-20.jpg";
        this.imgMan = "../../assets/images/men/winter/men winter 15-20.jpg";
        break;
      case temperature >= 10 && temperature < 15:
        this.imgWoman = "../../assets/images/women/winter/women winter 10-15.jpg";
        this.imgMan = "../../assets/images/men/winter/men winter 10-15.jpg";
        break;
      case temperature >= 5 && temperature < 10:
        this.imgWoman = "../../assets/images/women/winter/women winter 5-10.jpg";
        this.imgMan = "../../assets/images/men/winter/men winter 5-10.jpg";
        break;
      case temperature < 0:
        this.imgWoman = "../../assets/images/women/winter/women winter 0.jpg";
        this.imgMan = "../../assets/images/men/winter/men winter 0.jpg";
        break;
    }


  }


}
