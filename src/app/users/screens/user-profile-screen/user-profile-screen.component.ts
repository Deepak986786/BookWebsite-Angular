import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/services/apiservices/author-service';
import { UserService } from 'src/app/services/apiservices/user-service';
import { Author } from 'src/app/services/models/author';
import { Book } from 'src/app/services/models/book';

@Component({
  selector: 'user-profile-screen',
  templateUrl: './user-profile-screen.component.html',
  styleUrls: ['./user-profile-screen.component.css']
})
export class UserProfileScreenComponent implements OnInit {

  constructor(
    @Inject("AuthorService") private authorService:AuthorService,
    @Inject("BookService") private bookService:AuthorService,
    @Inject("UserService") private userService:UserService ,

    private activatedRoute: ActivatedRoute,
    private router:Router

  ) { }
  authors:Author[]=[];
  books:Book[]=[];
  id:string='';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id = params["id"]
      console.log(this.id);
    });

      this.userService.getFavoriteBooksOfUser(this.id).subscribe(x=>{
        this.books =x;
        // console.log('x',x)
        // console.log('books',this.books)
        console.log('books' ,this.books);
      });

      this.userService.getFavoriteAuthorsOfUser(this.id).subscribe(x=>{
        this.authors =x;
        // console.log('x',x)
        // console.log('authors',this.authors)
        console.log('authors,',this.authors);
      });
       
      
      

      
  }

}
