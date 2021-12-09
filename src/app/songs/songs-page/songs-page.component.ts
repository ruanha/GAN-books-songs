import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from 'src/services/music.service'

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.css']
})
export class SongsPageComponent implements OnInit {

  songs: Music[] = [];

  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.getSongs(10);
  }

  getSongs(numberOfSongs?: number) {
    return this.musicService.getSongs().subscribe((data) => {
      this.songs = data.songs.slice(0, numberOfSongs);
    });
  }
}
