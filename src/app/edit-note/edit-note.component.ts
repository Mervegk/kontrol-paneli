import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NoteService } from '../shared/note.service';
/*
import { Console } from 'console';
*/

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private noteService: NoteService) { }
  //private route: ActivatedRoute, private noteService: NoteService

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')
      
      console.log(idParam)

      //const note = this.noteService.getNote(idParam)
      
     

      
      
          
     
      
    })
  }

  deleteNote() {
    
  }

}
