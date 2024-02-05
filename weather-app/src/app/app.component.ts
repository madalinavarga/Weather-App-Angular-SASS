import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WeatherData, exampleData } from './models/weather-response';
import { WeatherApiService } from './services/weather-api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  private fb = inject(FormBuilder);
  weatherForm!: FormGroup
  weatherData: WeatherData = exampleData;

  constructor(private weatherService: WeatherApiService) { }

  ngOnInit(): void {
    this.weatherForm = this.fb.group({
      locationInput: ['', Validators.required]
    })

  }

  onEnterKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('Valoarea introdusă este:', this.weatherForm.value);
      let location = this.weatherForm.get('locationInput')?.value;
      this.weatherService.getData(location).subscribe({
        next: data => {
          this.weatherData = data
          this.weatherForm.reset()
        },
        error: err => console.error(`Error: ${err}`),
      });
    }
  }

  floor(value: number): number {
    return Math.floor(value);
  }
}
