import { Component, Inject, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/apiservices/book-service';
import { Book } from 'src/app/services/models/book';

@Component({
  selector: 'book-list-screen',
  templateUrl: './book-list-screen.component.html',
  styleUrls: ['./book-list-screen.component.css']
})
export class BookListScreenComponent implements OnInit {

  constructor(
    @Inject("BookService") private bookService:BookService 
  ) { }

  books:Book[]=[]

  ngOnInit(): void {

    this.bookService.getAllBooks()
                                .subscribe(books=>this.books = books);



  }

}
