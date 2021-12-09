import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageComponent } from './books-page/books-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BooksPageComponent
    ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BooksPageComponent]
})
export class BooksModule { }
