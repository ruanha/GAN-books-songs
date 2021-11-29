import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>('assets/mocks/books.json');
  }
}

export interface Book {
  id: number,
  author: string,
  title: string,
  cover_image: string,
  pages: number,
  releaseDate: string,
  isbn: string
}