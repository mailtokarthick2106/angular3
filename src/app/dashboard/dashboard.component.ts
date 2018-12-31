import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
import { Observable } from 'rxjs/Observable';
import { RouterService } from '../services/router.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private noteservice: NotesService) {
    this.noteservice.fetchNotesFromServer();
  }
  errMessage: string;
  ngOnInit() { }
}
