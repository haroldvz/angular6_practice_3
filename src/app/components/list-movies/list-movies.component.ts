import { Component, OnInit, Input } from '@angular/core';

import { MovieService } from './../../services/movie.service';
import { ResponseDescriptor } from '../../types/search.type';
import { DetailService } from '../../services/detail.service';
import { GenresDescriptor } from '../../types/genres.type';
import { GenresService } from '../../services/genres.service';
//primero modulos angular, luego material, luego nuestros modulos
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public data: ResponseDescriptor = new ResponseDescriptor();
  public strGenres: string = '';
  private detailService: DetailService;

  public genres: GenresDescriptor = new GenresDescriptor();

 
  constructor(private _movie_service:MovieService,
    private genresService: GenresService) { }

  public items:any;

  ngOnInit() {
    
    let r = this._movie_service.getTopRatedMovies(1).subscribe((data)=>{
      this.items = data.results;
      
    });

    this.genresService.getAll().subscribe(
      (data) => {
        this.genres = data;
      }
    );

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
