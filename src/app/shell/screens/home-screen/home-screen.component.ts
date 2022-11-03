import { Component, Inject, OnInit } from '@angular/core';
import { interval, map, Observable, tap } from 'rxjs';
import { AuthorService } from 'src/app/services/apiservices/author-service';
import { BookService } from 'src/app/services/apiservices/book-service';
import { Author } from 'src/app/services/models/author';
import { Book } from 'src/app/services/models/book';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(
    @Inject("AuthorService") private authorService:AuthorService,
    @Inject("BookService") private bookService:BookService,

  ) { }



  ngOnDestroy(): void {
    if(this.subscriptionauthor){
      this.subscriptionauthor.unsubscribe();
      this.subscriptionauthor=undefined;
    }
    if(this.subscriptionbook){
      this.subscriptionbook.unsubscribe();
      this.subscriptionbook = undefined
    }
  }
  author?:Author;

  book?:Book

  authors:Author[]=[];
  books:Book[]=[]

  subscriptionauthor?:any;
  subscriptionbook?:any;

  

  getRandomAuthor():Author{
    var index=Math.floor(Math.random()*this.authors.length);
    return this.authors[index];
}

getRandomAuthors():Observable<Author>{
    this.authorService.getAllAuthors().subscribe(x=>this.authors = x)
    // var servedAuthors:Author[]=[];
    return interval(3000)
                .pipe(
                    tap((x:any)=>console.log(x)),
                    map(_=>this.getRandomAuthor()),
                    tap((x:any)=>console.log(x)),                       
                );
}

getRandomBook():Book{
  var index=Math.floor(Math.random()*this.books.length);
  return this.books[index];
}

getRandomBooks():Observable<Book>{
  this.bookService.getAllBooks().subscribe(x=>this.books = x)
  // var servedAuthors:Author[]=[];
  return interval(3000)
              .pipe(
                  tap((x:any)=>console.log(x)),
                  map(_=>this.getRandomBook()),
                  tap((x:any)=>console.log(x)),                       
              );
}

  ngOnInit(): void {

    this.subscriptionauthor=this
    // .authorService
    .getRandomAuthors()
    .pipe(
      //filter((a:Author)=>  this.authors.indexOf(a)==-1),        
      //take(this.authorService.authors.length),
    )
    .subscribe((a)=>{
     //this.authors.push(a);
     this.author=a;
    });


    this.subscriptionbook= this.getRandomBooks().pipe().subscribe(a=>this.book = a);

  }

}
