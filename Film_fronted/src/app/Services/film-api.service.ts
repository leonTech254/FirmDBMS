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

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>('/films')
      .pipe(
        catchError(error => {
          this.handleError('Error getting films', error);
          return throwError(error);
        })
      );
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
