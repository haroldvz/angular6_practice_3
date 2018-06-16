import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { MovieModel } from './../types/movie.model';

import {map} from 'rxjs/internal/operators/map';


@Injectable()
export class MovieService {

  url = environment.api_url + '/movie';

  data: Array<MovieModel> = [];

    //responsabilidad .. obtener los datos del servidor y hacer map y todo eso.. solo entrgar data limpia
  constructor(private _http: HttpClient) { }

   /**
    * Send a petition to TMDB api
    * @param url: query request url
    * @param args: Additional arguments to query, default value empty ''
    */
   sendRequest(url: string, args = ''){
    url += ('?api_key=' + environment.api_key + args);
    /*return this._http.get<Array<Movie>>(url).subscribe(data => {   // data is already a JSON object
        console.log(data);
    });*/
    return this._http.get(url).pipe(map(
      (data: any) => {
        return data.results.map((item) => {
          console.log(item)
          return {
            id: item.id,
            title: item.title,
            backdrop_path:item.backdrop_path,
            poster_path:item.poster_path,
            vote_average:item.vote_average
          }
        });
      }
    ));
  }



  /**
    * Send a petition to TMDB api
    * @param url: query request url
    * @param args: Additional arguments to query, default value empty ''
    */
   sendRequestDetail(url: string, args = ''){
    url += ('?api_key=' + environment.api_key + args);
    /*return this._http.get<Array<Movie>>(url).subscribe(data => {   // data is already a JSON object
        console.log(data);
    });*/
    return this._http.get(url).pipe(map(
      (data: any) => {
        return data.map((item) => {
          console.log(item)
          return {
            id: item.id,
            title: item.title,
            backdrop_path:item.backdrop_path,
            poster_path:item.poster_path,
            vote_average:item.vote_average
          }
        });
      }
    ));
  }

 
  /**
   * api endpoint: movies/get-top-rated-movies
   * @param page: specifies the number page for the request
   */
  getTopRatedMovies(page: number){
    const url = this.url + '/top_rated';
    const args = '&page=' + page + '&language=en-US';
    return this.sendRequest(url, args);
  }

}
