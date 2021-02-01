import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  url = "https://api.openweathermap.org/data/2.5/weather";
  apikey = "ef473aebc6e1db336b39cd2e32fa4a50";

  constructor(public http: HttpClient) { }

  getWeatherByCoodinates(lat, long){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon',long)
    .set('units', 'imperial')
    .set('appid', this.apikey)

    return this.http.get(this.url, {params})
  }

  getWeatherByCityName(name: string){
    let params = new HttpParams()
    .set('q', name)
    .set('units', 'imperial')
    .set('appid', this.apikey)

    return this.http.get(this.url, {params})
  }
}
