// DEPENDENCIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MarkdownModule } from 'ngx-markdown';

// COMPONENTS
import {
  AppComponent,
  NoteListComponent
} from './components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NoteListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
