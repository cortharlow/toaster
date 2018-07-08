import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent {
  // INPUTS
  @Input() note: any;

  constructor() { }

  ngOnInit() {
    console.log(this.note);
  }
}
