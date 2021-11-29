import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { SongsPageComponent } from './components/songs-page/songs-page.component';

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
