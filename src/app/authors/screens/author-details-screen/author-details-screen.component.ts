import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/services/apiservices/author-service';
import { Author } from 'src/app/services/models/author';
import { __param } from 'tslib';

@Component({
  selector: 'author-details-screen',
  templateUrl: './author-details-screen.component.html',
  styleUrls: ['./author-details-screen.component.css']
})
export class AuthorDetailsScreenComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute ,
    @Inject("AuthorService") private authorService:AuthorService,
     private router:Router
  ) { }

  id?:string;
  author?:Author;
  error?:string;

  showDeleteDialog=false

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.authorService
      .getAuthorById(this.id!)
      .subscribe({
        next: author=>{
          this.author=author;
          this.error=undefined;
        },
        error: error=>{
          console.log('in get author by Id subscription error:',error.status); 
          if(error.status==404)
            this.error=`Invalid id ${this.id}`;
          else if (error.status==0)
            this.error="Couldn't connect to the server";
          this.author=undefined; //NOT Found
        }
      })
});
   
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
      .authorService
      .removeAuthor(this.author!.id)
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
