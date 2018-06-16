import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private items$ = new Subject<any[]>();

  private items:string[] = [
    'Jhonny',
    'Angelina',
    'Silvester Stallone',
    'Antonio Sannit'
  ]

  private actors_items =[
    {
      id:1,
      name:"Johnny Depp",
      nationality:"American",
      birthday:"1980-05-07",
      img: 'http://image.tmdb.org/t/p/w300//ea4fTp9T8Zy2KWxyFsqDIBgHZmb.jpg'
    },
    {
      id:2,
      name:"Alexandra Daddario",
      nationality:"American",
      birthday:"16 Mar 1986 ",
      img: 'http://image.tmdb.org/t/p/w300//s544zfrPI1Dnk60t1x1KUXF4iH3.jpg'
    },
    {
      id:3,
      name:"Ryan Reinolds",
      nationality:"Canadian",
      birthday:"23 Oct 1976 ",
      img: 'http://image.tmdb.org/t/p/w300//h1co81QaT2nJA41Sb7eZwmWl1L2.jpg'
    },
    {
      id:4,
      name:"Christopher Michael",
      nationality:"American",
      birthday:"1979-12-12",
      img: 'http://image.tmdb.org/t/p/w300//n4DD1AYU7WEMNPLga1TxqnHivn1.jpg'
    }
    
  ]

  constructor() { }

  getItems():string[]{
    return this.items;
  }

  getActors():any[]{
    return this.actors_items;
  }

  get(index):string{
    return this.items[index];
  }

  get_actor(index):any{
    return this.actors_items[index];
  }

  add(item){
    this.items.push(item)
    //this.items$.next(this.items);
  }

  getItems$(): Observable<any[]>{
    return this.items$.asObservable();
  }

}
