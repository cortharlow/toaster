// DEPENDENCIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MarkdownModule } from 'ngx-markdown';

// MATERIAL
import {
  MatCardModule
} from '@angular/material';

// COMPONENTS
import {
  AppComponent,
  NoteListComponent
} from './components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MarkdownModule.forRoot(),

    // MATERIAL
    MatCardModule
  ],
  declarations: [
    AppComponent,
    NoteListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
