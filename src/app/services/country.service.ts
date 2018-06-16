import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private items:string[] = [
    
    'Colombia',
    'Argentina',
    'Francia',
    'España'
  ]

  constructor() { }

  getItems(){
    return this.items;
  }

  get(index){
    return this.items[index];
  }
}
