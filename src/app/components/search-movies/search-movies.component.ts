import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies/movies.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent  implements OnInit {
    query: string = '';
    movies: any[] = [];
    loading: boolean = false;
    private searchTerms = new Subject<string>();
  
    constructor(private movieService: MovieService) { }
  
    ngOnInit(): void {
      this.searchTerms.pipe(
        debounceTime(1000), // Wait for 1 second of inactivity
        distinctUntilChanged(), // Ignore if the same query is repeated
        switchMap((term: string) => this.movieService.searchMovies(term))
      ).subscribe(
        (response: any) => {
          this.movies = response.Search || [];
          this.loading = false;
        },
        (error: any) => {
          console.error('Error:', error);
          this.loading = false;
        }
      );
    }
  
    searchMovies(): void {
      if (this.query.trim().length >= 3) {
        this.loading = true;
        this.searchTerms.next(this.query);
      }
    }
  }
  
