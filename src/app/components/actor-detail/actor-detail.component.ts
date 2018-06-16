import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from './../../services/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {

  private sub:any;
  actor:any;

  constructor(private route: ActivatedRoute,private _actor_service: ActorService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=> {
      let id:number = +params['id'];
      this.actor = this._actor_service.get_actor(id);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
