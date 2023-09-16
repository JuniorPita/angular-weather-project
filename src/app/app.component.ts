import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/models/weather.model';
import { WeatherService } from 'src/shared/services/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  public weatherData?: WeatherData;
  public cityName: string = 'Moscow';

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  public onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData('Wellington').subscribe({
      next: (response) => {
        this.weatherData = response;
      },
    });
  }
}
