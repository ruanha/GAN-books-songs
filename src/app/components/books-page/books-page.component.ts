import { Component, OnInit } from '@angular/core';

import { Book, BooksService } from 'src/services/books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  books: Book[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks(10);
  }

  getBooks(numberOfBooks?: number) {
    return this.booksService.getBooks().subscribe((data) => {
      this.books = data.slice(0, numberOfBooks);
    });
  }
}
