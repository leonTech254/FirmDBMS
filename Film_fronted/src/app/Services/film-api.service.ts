import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Film } from '../Model/film';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FilmAPIService {
  constructor(private http: HttpClient) { }
  firm:Film[]=[];
 

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>('/films')
      .pipe(
        catchError(error => {
          this.handleError('Error getting films', error);
          return throwError(error);
        })
      );
  }

 getDummyData():Film[]{
  this.firm= [
    {
      "id": 1,
      "title": "Inception",
      "year": 2010,
      "director": "Christopher Nolan",
      "stars": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      "review": "A mind-bending thriller that explores the concept of dreams within dreams."
    },
    {
      "id": 2,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "stars": "Tim Robbins, Morgan Freeman",
      "review": "A powerful tale of hope and friendship set in a prison."
    },
    {
      "id": 3,
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "stars": "Marlon Brando, Al Pacino, James Caan",
      "review": "An epic crime drama that follows the Corleone family."
    }
  ]
  return this.firm;
 }

  addFilm(newFilm: Film): Observable<Film> {
    return this.http.post<Film>('/films', newFilm)
      .pipe(
        catchError(error => {
          this.handleError('Error adding film', error);
          return throwError(error);
        })
      );
  }

  updateFilm(updatedFilm: Film): Observable<Film> {
    return this.http.put<Film>('/films', updatedFilm)
      .pipe(
        catchError(error => {
          this.handleError('Error updating film', error);
          return throwError(error);
        })
      );
  }

  deleteFilm(id: number): Observable<void> {
    return this.http.delete<void>(`/films/${id}`)
      .pipe(
        catchError(error => {
          this.handleError('Error deleting film', error);
          return throwError(error);
        })
      );
  }

  private handleError(message: string, error: any): void {
    Swal.fire('Error', message, 'error');
    console.error(message, error);
  }
}
