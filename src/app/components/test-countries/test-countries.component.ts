import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../services/country.service';

@Component({
  selector: 'app-test-countries',
  templateUrl: './test-countries.component.html',
  styleUrls: ['./test-countries.component.scss']
})
export class TestCountriesComponent implements OnInit {

  constructor(private _country_service:CountryService) { }

  public items:any;

  ngOnInit() {
    this.items = this._country_service.getItems();
  }

}
