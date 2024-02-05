import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { WeatherData } from '../models/weather-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  apiKey = "14ddd11bd4001858494b7627e8ad39d7";
  constructor(private httpClient: HttpClient) { }

  getData(location: string) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`;
    return this.httpClient.get<WeatherData>(url);
  }
}
