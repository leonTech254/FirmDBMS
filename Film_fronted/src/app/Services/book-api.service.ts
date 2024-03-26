import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Model/book';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  baseURL: string = "http://localhost:8080/api/books/";

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseURL)
      .pipe(
        catchError(this.handleError('getAllBooks', []))
      );
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(this.baseURL, newBook)
      .pipe(
        catchError(this.handleError('addBook', newBook))
      );
  }

  updateBook(updatedBook: Book): Observable<Book> {
    const url = `${this.baseURL}/${updatedBook.id}`;
    return this.http.put<Book>(url, updatedBook)
      .pipe(
        catchError(this.handleError('updateBook', updatedBook))
      );
  }

  deleteBook(id: number): Observable<boolean> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<boolean>(url)
      .pipe(
        catchError(this.handleError('deleteBook', false))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
