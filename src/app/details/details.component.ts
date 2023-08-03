import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
        <form [formGroup]="applyService" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name">Last Name </label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">

          <button class="primary" type="submit">Click here to apply</button>

        </form>
      </section>
      
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocation: HousingLocation|undefined;
  housingService: HousingService = inject(HousingService);
  applyService = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  submitApplication(){
    this.housingService.submitApplication(
      this.applyService.value.firstName ?? '',
      this.applyService.value.lastName ?? '',
      this.applyService.value.email ?? ''
    );
  }
  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHouseById(housingLocationId).then((housingLocation)=>{
      this.housingLocation = housingLocation;
    });
  }
}
