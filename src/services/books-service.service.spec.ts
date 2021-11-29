import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { BooksService } from './books.service';

describe('BooksServiceService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksService]
    });
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
