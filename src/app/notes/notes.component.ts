import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  animations: [
    trigger('noteCardAnim', [
      transition(':leave', [
        animate(500, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class NotesComponent implements OnInit {

  notes: Note[]

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes()
  }

  offDeleteClick(note: Note) {
    this.noteService.deleteNote(note.id)
  }

}
