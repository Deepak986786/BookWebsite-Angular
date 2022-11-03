import { Component, Inject, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthorService } from 'src/app/services/apiservices/author-service';
import { Author } from 'src/app/services/models/author';

@Component({
  selector: 'author-list-screen',
  templateUrl: './author-list-screen.component.html',
  styleUrls: ['./author-list-screen.component.css']
})
export class AuthorListScreenComponent implements OnInit {

  constructor(
    @Inject("AuthorService") private authorService:AuthorService
  ) { }

  authors:Author[]=[];

  ngOnInit(): void {

    this.authorService.getAllAuthors()
                       .pipe(
                        catchError((error:any)=>{
                          return throwError(()=>error);
                        })
                       )
                       .subscribe((authors:any)=>this.authors = authors);

  }

}
