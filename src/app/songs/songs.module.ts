import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsPageComponent } from './songs-page/songs-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SongsPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SongsPageComponent]
})
export class SongsModule { }
