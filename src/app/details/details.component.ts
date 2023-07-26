import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class="listing-details">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location"> {{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
      <h2 class="section-heading"> About this housing Location</h2>
        <ul>
          <li> Units Available: {{housingLocation?.availableUnits}}</li>
          <li> Included Wifi: {{housingLocation?.wifi}}</li>
          <li> Laundry Available: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="sesction-heading">Apply to live here</h2>
        <button class="primary" type="button">Click here to apply</button>
      </section>
      
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocation: HousingLocation|undefined;
  housingService: HousingService = inject(HousingService);
  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHouseById(housingLocationId);
  }
}
