import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './books/books-page/books-page.component';
import { FrontpageComponent } from './core/frontpage/frontpage.component';
import { SongsPageComponent } from './songs/songs-page/songs-page.component';

const routes: Routes = [
  {
    path: '', component: FrontpageComponent
  },
  {
    path: 'books', component: BooksPageComponent
  },
  {
    path: 'music', component: SongsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
