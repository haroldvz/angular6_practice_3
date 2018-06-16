import { Component, OnInit } from '@angular/core';

import { MovieService } from './../../services/movie.service';
import { ResponseDescriptor } from '../../types/search.type';
//primero modulos angular, luego material, luego nuestros modulos
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public data: ResponseDescriptor = new ResponseDescriptor();

  constructor(private _movie_service:MovieService) { }

  public items:any;

  ngOnInit() {
    
    let r = this._movie_service.getTopRatedMovies(1).subscribe((data)=>{
      this.items = data.results;
    });
    console.log(this.items);

  
    
  }

  /*"backdrop_sizes": [
  "w300",
  "w780",
  "w1280",
  "original"
],
"logo_sizes": [
  "w45",
  "w92",
  "w154",
  "w185",
  "w300",
  "w500",
  "original"
],
"poster_sizes": [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original"
],
"profile_sizes": [
  "w45",
  "w185",
  "h632",
  "original"
],
"still_sizes": [
  "w92",
  "w185",
  "w300",
  "original"
]*/

}
