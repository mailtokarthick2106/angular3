import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
import { Observable } from 'rxjs/Observable';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent {

  constructor(private noteservice: NotesService) { }
  errMessage: string;
  note: Note = new Note();
  // declare the array
  notes: Array<Note> = [];
  takeNotes() {
    if (this.note.title === '' && this.note.text === '') {
      return Observable.throw(this.errMessage = 'Title and Text both are required fields');
    }
    this.notes.push(this.note);

    this.noteservice.addNote(this.note).subscribe
      (
      data => { },
      err => this.errMessage = 'Http failure response for http://localhost:3000/api/v1/notes: 404 Not Found'
      );
    this.note = new Note();
  }

}
