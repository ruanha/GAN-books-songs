import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() img_url!: string;

  constructor() { }

  ngOnInit(): void {
    this.img_url = "assets/song-default.png"; //all urls in mock are broken
  }

}
