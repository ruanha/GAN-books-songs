import { Component, OnInit } from '@angular/core';
import { MusicService, Music } from 'src/services/music.service';
import { BooksService } from 'src/services/books.service';
import { Book } from 'src/services/books.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  route: any;
  songs: Music[] = [];
  books: Book[] = [];

  constructor(
    private musicService: MusicService,
    private booksService: BooksService
    ) { }

  ngOnInit(): void {
    this.getSongs(3);
    this.getBooks(3);
  }

  getSongs(numberOfSongs?: number) {
    return this.musicService.getSongs().subscribe((data) => {
      this.songs = data.songs.slice(0, numberOfSongs);
    });
  }

  getBooks(numberOfBooks?: number) {
    return this.booksService.getBooks().subscribe((data) => {
      this.books = data.slice(0, numberOfBooks);
    });
  }

}
