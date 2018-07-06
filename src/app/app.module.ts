// DEPENDENCIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import {
  AppComponent,
  NoteListComponent
} from './components';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NoteListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
