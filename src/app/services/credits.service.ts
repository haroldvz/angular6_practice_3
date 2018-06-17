import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {map} from 'rxjs/internal/operators/map';


@Injectable()
export class CreditsService {

  url = environment.api_url + '/movie';

  constructor(private _http: HttpClient) { }

   /**
    * Send a petition to TMDB api
    * @param url: query request url
    * @param args: Additional arguments to query, default value empty ''
    */
   sendRequestCredits(url: string, args = ''){
    url += ('?api_key=' + environment.api_key + args);
    return this._http.get(url).pipe(map(
      (data: any) => {
        return data.cast.map((item) => {
          console.log(item)
          return {
            id: item.id,
            name: item.name,
            profile_path:item.profile_path,
          }
        });
      }
    ));
  }

  /**
   * api endpoint: movies/get-credits
   * 
   */
  getCredits(id_movie:number){
    const url = this.url + '/'+id_movie+'/credits';
    const args = '&language=en-US';
    return this.sendRequestCredits(url, args);
  }

}
