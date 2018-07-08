import { Component, Input } from '@angular/core';

@component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent {
  // INPUTS
  @Input() note: any;

  constructor() { }


}
