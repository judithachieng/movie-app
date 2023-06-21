import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth/auth-guard.service';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { SuggestMoviesComponent } from './components/suggest-movies/suggest-movies.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UpcomingMoviesComponent,
    SearchMoviesComponent,
    SuggestMoviesComponent,
    NavComponent,
    PaginationComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
