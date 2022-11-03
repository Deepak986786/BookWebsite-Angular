import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/apiservices/book-service';
import { Book } from 'src/app/services/models/book';

@Component({
  selector: 'book-add-screen',
  templateUrl: './book-add-screen.component.html',
  styleUrls: ['./book-add-screen.component.css']
})
export class BookAddScreenComponent implements OnInit {
  book:Book;

  constructor(
    @Inject("BookService") private bookService:BookService,
    private router:Router
  ) { 
    this.book ={
      id: "",
      title: "",
      authorId: "",
      price: 5000,
      rating: 5,
      description: "",
      coverUrl: "",
      tags: ""
    }
  }

  ngOnInit(): void {
  }

  errors?:any;

  errorTitle='';

  onSave(book:Book){
    this.bookService.addBook(book)
                       .subscribe({
                        next:(()=>{book
                          console.log("author added",book);
                          this.errors = undefined
                          this.router.navigate(['/book/list']);
                          
                        }),
                        error:(err)=>{
                          console.log("author add failed",err.error);
                          this.errors=err.error.errors;
                          if(err.status === 401){
                            this.errorTitle = "Unauthorized User"
                          }else if(err.status === 400){
                            this.errorTitle = "Bad Request"
                          }else{
                            this.errorTitle="Something gone wrong !"
                          }
                          
                        }
                       })
  }

}
