import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth/auth-guard.service';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { SuggestMoviesComponent } from './components/suggest-movies/suggest-movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent },
  { path: 'upcoming', component: UpcomingMoviesComponent },
  { path: 'search', component: SearchMoviesComponent },
  { path: 'recommend', component: SuggestMoviesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
