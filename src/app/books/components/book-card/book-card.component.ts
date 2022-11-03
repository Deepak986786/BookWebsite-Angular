import { Component, Inject, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/apiservices/user-service';
import { Book } from 'src/app/services/models/book';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  constructor(
    @Inject("UserService") private userService:UserService,

  ) { }

  favStyle='bi bi-heart'
    user:any;
  @Input() book?:Book;
  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    // this.user = this.user.user;
    this.user = JSON.parse(this.user)
    this.user =this.user.user
  }

  addToFavorite(){
   this.userService.AddFavoriteBooksOfUser(this.user.email, this.book).subscribe(_=>{
        this.favStyle='bi bi-heart-fill text-red-700'
   });
  }

}
