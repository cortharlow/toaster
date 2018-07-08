import { Component } from '@angular/core';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent {
  // notes: any;
  notes = ["# Title 1 \n## Title 2","# Title 1 \n## Title 2"];
  note: any;

  constructor() { }


}
