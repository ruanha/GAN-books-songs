import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { BooksService } from 'src/services/books.service';
import { MusicService } from 'src/services/music.service';
import { Music } from 'src/services/music';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  inputControl = new FormControl();
  @Input() label = 'Search';
  books: any[] = [];
  music: Music[] = [];
  options: any[] = [];
  filteredOptions: Observable<any[]> = new Observable();

  selected = 'all';
  searchTerm  = '';
  paramsObject: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private musicService: MusicService,
    private booksService: BooksService
  ) {
    this.activatedRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit(): void {
    this.getBooks();
    this.getSongs();
    this.filteredOptions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.activatedRoute.queryParamMap
      .subscribe((params) => {
        this.paramsObject = { ...params.keys, ...params };
      }
    );
    this.initSearchForm()
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    var filteredOptions = <any>[];

    if (value.length === 0) return filteredOptions;

    if (this.selected === "music" || this.selected === "all") {
      filteredOptions = filteredOptions.concat(this.music.filter(option => option.title.toLowerCase().includes(filterValue) || option.artist.toLowerCase().includes(filterValue)))
    }

    if (this.selected === "books" || this.selected == 'all') {
      filteredOptions = filteredOptions.concat(this.books.filter(option => option.title.toLowerCase().includes(filterValue) || option.author.toLowerCase().includes(filterValue)))
    }

    return filteredOptions;
  }

  initSearchForm() {
    this.selected = this.paramsObject.params.category || "all";

    var option = {
      title: this.paramsObject.params.title,
      artist: this.paramsObject.params?.artist,
      author: this.paramsObject.params?.author
    }
    if (option.title) {
      this.inputControl.setValue(
        this.stringRepresentation(option)
      );
    }
  }

  categoryChange() {
    this.setUrlCategory(this.selected)
    var urlParams = this.paramsObject.params
    this.setUrlId(urlParams);
  }

  selectionChange(value: any) {
    this.setUrlId(value)
  }

  getBooks() {
    return this.booksService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  getSongs() {
    return this.musicService.getSongs().subscribe((data) => {
      this.music = data.songs;
    });
  }

  stringRepresentation(option: any) {
    return `${option.artist ? option.artist : option.author} - ${option.title}`;
  }

  setUrlCategory(value: string) {
    const queryParams: Params = { category: value };

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
      });
  }

  setUrlId(value: any) {
    const queryParams: Params = { category: this.selected, title: value.title, artist: value.artist, author: value.author };
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });
  }
}
