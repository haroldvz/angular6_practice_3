import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private items:string[] = [
    
    'Drama',
    'Terror',
    'Acción',
    'Suspenso'
  ]

  constructor() { }

  getItems(){
    return this.items;
  }

  get(index){
    return this.items[index];
  }
}
