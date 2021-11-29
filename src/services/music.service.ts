import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MusicService {

  constructor(private http: HttpClient) {}

  getSongs(): Observable<any> {
    return this.http.get<any>('assets/mocks/music.json');
  }
}

export interface Music {
  title: string,
  artist: string,
  year: string,
  web_url: string,
  img_url: string
}