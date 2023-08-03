 import { Injectable } from '@angular/core';
 import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected url: string = "http://localhost:3000/location"
  constructor() { }

  async getAllHousing(): Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHouseById(id: Number): Promise<HousingLocation>{
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstname: string, lastName: string, email: string){
    console.log(firstname, lastName, email);
  }

}
