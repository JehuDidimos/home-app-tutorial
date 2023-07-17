import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-image" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h1 class="listing-header">{{housingLocation.name}}</h1>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
