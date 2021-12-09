import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SharedModule } from '../shared/shared.module';
import { BooksModule } from '../books/books.module';
import { SongsModule } from '../songs/songs.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FrontpageComponent,
    NavBarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksModule,
    SongsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    FrontpageComponent,
    NavBarComponent,
    SearchBarComponent
  ],
})
export class CoreModule { }
