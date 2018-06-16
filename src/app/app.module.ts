import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ActorService} from './services/actor.service';
import { MovieService } from './services/movie.service';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { TestCountriesComponent } from './components/test-countries/test-countries.component';

import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CreditsComponent } from './components/credits/credits.component';
import { CreditsService } from './services/credits.service';
import { SearchComponent } from './components/search/search.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { ListComponent } from './components/list/list.component';
import { StatsComponent } from './components/stats/stats.component';

import { MatTableModule } from '@angular/material/table';

import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { GenresComponent } from './components/genres/genres.component';
import { TestCategoriesComponent } from './components/test-categories/test-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    TestCategoriesComponent,
    TestCountriesComponent,
    ListMoviesComponent,
    ListActorsComponent,
    ActorDetailComponent,
    MovieDetailComponent, 
    CreditsComponent, 
    SearchComponent, 
    PageListComponent, 
    PageDetailComponent, 
    ListComponent, 
    StatsComponent, 
    GenresComponent,

    


  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatChipsModule,
    CommonModule,
    RouterModule
  ],
  providers: [ActorService,MovieService,CreditsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
