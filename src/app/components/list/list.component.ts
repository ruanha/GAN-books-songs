import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() items!: any[];
  @Input() listTitle!: string;
  @Input() itemTitle!: string;
  @Input() itemSubtitle!: string;

  constructor() { }
}
