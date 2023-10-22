import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    new Note('Deneme', 'İçerik deneme')
  ];

  constructor() {
    this.loadState()
  }

getNotes() {
  return this.notes
}

getNote(id: string) {
  this.notes.find(n => n.id === id)
}

addNote(note: Note) {
  this.notes.push(note)
  this.saveState()
 
}

updateNote(id: string, updatedField: Partial<Note>) {
  const note = this.getNote(id)
  Object.assign(note, updatedField)
  
}

deleteNote(id: string) {
  const noteIndex = this.notes.findIndex(n=> n.id === id)
  if (noteIndex == -1) return
   
  this.notes.splice(noteIndex, 1)

  this.saveState()
 
}

saveState() {
  localStorage.setItem('notes', JSON.stringify(this.notes))
}

loadState() {
  const notesInStorage = JSON.parse(localStorage.getItem('notes')||'()')
  this.notes = notesInStorage
}

} 
