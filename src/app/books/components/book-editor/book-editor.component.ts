import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/services/models/book';

@Component({
  selector: 'book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.css']
})
export class BookEditorComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
   
  }

  @Input() book?:Book;
  @Output()  bookChange = new EventEmitter<Book>();

  dead=false;

  @Output() save = new EventEmitter<Book>();

  handleSave(){
    if(this.book?.tags){
      this.book!.tagList=this.book!.tags.split(',');
    }

    this.bookChange.emit(this.book)
    this.save.emit(this.book)

  }
}
