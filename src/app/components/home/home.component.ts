import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies/movies.service';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = []; 
  loading: boolean = false;
  currentPage: number = 1;
  pageSize: number = 10;
  totalMovies: number = 0;
  

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getUpcomingMovies();
  }

  getUpcomingMovies(): void {
    this.loading = true;
    this.movieService.getUpcomingMovies().pipe(delay(2000)).subscribe(
      (response: any) => {
        this.movies = response.results;
        this.totalMovies = response.results.length;
        console.log(this.movies);
        this.loading = false;
      },
      (error: any) => {
        console.error('Error:', error);
        this.loading = false
      }
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getUpcomingMovies();
  }

}
