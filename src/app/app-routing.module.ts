import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCategoriesComponent } from './components/test-categories/test-categories.component';
import { TestCountriesComponent } from './components/test-countries/test-countries.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { CreditsComponent } from './components/credits/credits.component';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'page-list', pathMatch: 'full'},
  {path:'categories', component:TestCategoriesComponent},
  {path:'countries', component:TestCountriesComponent},
  {path:'movies', component:ListMoviesComponent},
  {path:'movie-credits/:id', component:CreditsComponent},
  {path:'actors', component:ListActorsComponent},
  {path:'actor/:id', component:ActorDetailComponent},
  {path:'movie/:id', component:MovieDetailComponent},

  {path:'page-list', component:PageListComponent},
  {path:'page-detail/:id', component:PageDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
