import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/apiservices/author-service';
import { Author } from 'src/app/services/models/author';

@Component({
  selector: 'author-add-screen',
  templateUrl: './author-add-screen.component.html',
  styleUrls: ['./author-add-screen.component.css']
})
export class AuthorAddScreenComponent implements OnInit {

  author:Author;
  constructor(
    @Inject("AuthorService") private authorService:AuthorService,
    private router:Router
  ) {

    this.author ={
      id:'',
      name:'',
      biography:'',
      birthDate:'',
      photoUrl:'',
      deathDate:'',
      tags:'',
      tagList:[],
      
      social:{
        id:0,
        email:null,
        website:null
      }
    }

   }

  ngOnInit(): void {
  }

  errors?:any;

  errorTitle='';

  onSave(author:Author){
    this.authorService.addAuthor(author)
                       .subscribe({
                        next:((author)=>{
                          console.log("author added",author);
                          this.errors = undefined
                          this.router.navigate(['/author/list']);
                          
                        }),
                        error:(err)=>{
                          console.log("author add failed",err.errors);
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
