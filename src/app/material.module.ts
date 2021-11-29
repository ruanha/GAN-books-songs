import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  exports: [
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }