import { Injectable } from '@angular/core';
import {ActorService} from './actor.service';
import {MovieService} from './movie.service';
import {CountryService} from './country.service';
import {CategoryService} from './category.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private items$ = new Subject<any[]>();

  private items:any[] = [
    
  ]

  getItems(){
    return this.items;
  }

  get(index){
    return this.items[index];
  }

  getItems$(): Observable<any[]>{
    return this.items$.asObservable();
  }

  addToRanking(index){
    this.items[index].ranking += 1;
    this.items$.next(this.items);
  }

  constructor(private _actor_service:ActorService,
              private _movie_service:MovieService,
              private _country_service:CountryService,
              private _category_service:CategoryService) { }
}
