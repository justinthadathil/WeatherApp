import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from '../weather-service.service'

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat;
  long;
  weather;
  weatherData = false;

  constructor(public WeatherServiceService: WeatherServiceService) { }

  ngOnInit(): void {
    this.getGeoLocation();
  }

  getGeoLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.long = success.coords.longitude;

        this.WeatherServiceService.getWeatherByCoodinates(this.lat, this.long).subscribe(data => {
          if(data){
            this.weather = data;
            this.weatherData = true;
            console.log(data)
          }

        })
      })
    }
  }

  userValue(city){
    this.WeatherServiceService.getWeatherByCityName(city).subscribe((data)=>{
      if(data){
        this.weather = data;
        this.weatherData = true;
        console.log(data)
      }
    })
  }

}
