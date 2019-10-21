import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchmovieService {

  constructor(private http: HttpClient) { }

  search(title: string, year: number = 0) {
    let y = year ? `&y=${year}` : '';

    return this.http.get(`http://www.omdbapi.com/?t=${title}${y}&plot=full&apikey=44e4e2dd`);
  }
}
