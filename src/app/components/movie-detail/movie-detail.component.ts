import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  private sub:any;
  movie:any;

  constructor(private route: ActivatedRoute,private _movie_service: MovieService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=> {
      let id:number = +params['id'];
      //this.movie = this._movie_service.get(id);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
