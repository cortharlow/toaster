import { Component } from '@angular/core';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent {
  // @Input() notes: Array<any> = [];
  notes = ["# Title 1 \n## Title 2","# Title 1 \n## Title 2"];
  note: any;

  constructor() { }

  saveNote() {
    console.log('New Note');
    console.log(this.note);
    this.notes.push(this.note);
    this.note = '';
  }

}
