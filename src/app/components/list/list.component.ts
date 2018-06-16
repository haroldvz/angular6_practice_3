import { Component, OnInit, Input } from '@angular/core';
import { ResponseDescriptor } from './../../types/search.type';
import { GenresDescriptor } from './../../types/genres.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns = [ 'title', 'genre_ids',
                      'release_date',
                      'stats'];

  @Input() public data:ResponseDescriptor;
  @Input() public genres: GenresDescriptor = new GenresDescriptor();
  
  dataSource = ELEMENT_DATA
  
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("Dataaaa")
    console.log(this.data)
    this.dataSource = ELEMENT_DATA
  }

  onClick(movie) {
    this.router.navigate(['/page-detail', movie]);
  }
  

}



export interface PeriodicElement {
 
  genre_ids: number;
  title: string;
  release_date: string;
  stats: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { 
    title: "number",
    genre_ids: 1,
    release_date: "string",
    stats: "<app-stats></app-stats>",
  },
  
];