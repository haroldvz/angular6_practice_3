import { Component, OnInit } from '@angular/core';
import { ActorService } from './../../services/actor.service';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.scss']
})
export class ListActorsComponent implements OnInit {

  constructor(private _actor_service:ActorService) { }

  public items:any;

  ngOnInit() {
    this.items = this._actor_service.getActors();
  }
}
