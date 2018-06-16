import { Component, OnInit } from '@angular/core';
import { ResponseDescriptor } from './../../types/search.type';
import { GenresService } from './../../services/genres.service';
import { GenresDescriptor } from './../../types/genres.type';
@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  public data: ResponseDescriptor = new ResponseDescriptor();
  public genres: GenresDescriptor = new GenresDescriptor();

  constructor(
    private genresService: GenresService
  ) { }

  ngOnInit() {
    this.genresService.getAll().subscribe(
      (data) => {
        this.genres = data;
      }
    );

    
  }

  onSearch(data:ResponseDescriptor) {
    this.data = data;
  }

}
