import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
  private rapidApiHost = 'moviesdatabase.p.rapidapi.com';
  private rapidApiKey = '650dbe08b6msh67af47a89fe2d43p1cdbfdjsna6743fa4f9cd';
  private omdbApiUrl: string = 'http://www.omdbapi.com';
  private omdbApiKey: string = 'f91ddec1';

  constructor(private http: HttpClient) { }

  getUpcomingMovies(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': this.rapidApiHost,
      'X-RapidAPI-Key': this.rapidApiKey
    });

    return this.http.get(this.apiUrl, { headers });
  }
  searchMovies(query: string): Observable<any> {
    const url = `${this.omdbApiUrl}?s=${query}&apikey=${this.omdbApiKey}`;
    return this.http.get(url);
  }
}
