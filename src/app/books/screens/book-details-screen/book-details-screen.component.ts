import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/apiservices/book-service';
import { Book } from 'src/app/services/models/book';

@Component({
  selector: 'book-details-screen',
  templateUrl: './book-details-screen.component.html',
  styleUrls: ['./book-details-screen.component.css']
})
export class BookDetailsScreenComponent implements OnInit {
 

    constructor(
    private activatedRoute:ActivatedRoute,
    @Inject("BookService") private bookService:BookService
  , private router:Router
    ) { }

    id:string='';
    book:Book|null|undefined;
    showDeleteDialog=false
    

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params=>{
      this.id=params['id'];
      this.fetchBook(this.id);
    })
  }

  fetchBook(id: string) {
    this
    .bookService
    .getBookById(id)
    .subscribe({
      next:(book:Book)=>{
        this.book = book
      },
      error:((err:any)=>{
        this.book=undefined;
        console.log("book not found  with id ",id);
        
      })
    })
 //book not found
   
  }   

  handleShowDeleteDialog(){
    this.showDeleteDialog=true;
    console.log('show delete dialog changed to ', this.showDeleteDialog);
  }

  showErrorPrompt=false;
  errorMessage='';
  errorTitle='';  

  handleDelete(confirmation:boolean){
    console.log('User Selected to Delete', confirmation);
    this.showDeleteDialog=false;
    if(!confirmation)
      return;
    this
      .bookService
      .removeBook(this.book!.id)
      .subscribe({
        next: response=> { this.router.navigate(['/author/list'])},
        error: err=>{ 
          console.log('error',err);
          this.showErrorPrompt=true;
          if(err.status===401){
            this.errorMessage="You Need to Login to carry out this operation";
            this.errorTitle="Authentication Error";
          } else if(err.status===404){
            this.errorMessage="Author Not Found";
            this.errorTitle="No Such Author";
          } else{
            this.errorTitle="Something went wrong";
            this.errorMessage=`Error: ${err.status}`;
            console.log(err);
          }
        } 
      })

  }

}
