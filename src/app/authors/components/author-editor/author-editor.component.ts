import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/services/models/author';

@Component({
  selector: 'author-editor',
  templateUrl: './author-editor.component.html',
  styleUrls: ['./author-editor.component.css']
})
export class AuthorEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() author?:Author;
  
  @Output()  authorChange = new EventEmitter<Author>();

  dead=false;

  @Output() save = new EventEmitter<Author>();

  handleSave(){
    if(this.author?.tags){
      this.author!.tagList=this.author!.tags.split(',');
    }
    if(this.author?.deathDate==''){
      this.author.deathDate=null;
    }

    this.authorChange.emit(this.author)
    this.save.emit(this.author)

  }


}
