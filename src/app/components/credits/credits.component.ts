import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CreditsService } from './../../services/credits.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  private routerSubscribe:any;
  public cast:any;

  constructor(private route:ActivatedRoute,private _movie_service:CreditsService) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params =>{
      let id_movie:number = +params['id'];
      this._movie_service.getCredits(id_movie).subscribe((data:any)=>{
        this.cast = data;
        console.log(this.cast)
      });
    })
  }

}
