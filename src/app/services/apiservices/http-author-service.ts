import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Author } from "../models/author";
import { AuthorService } from "./author-service";
import { UserService } from "./user-service";


let url='https://localhost:7041/api/author';


@Injectable({
    providedIn:"root"
})
export class SimpleAuthorHttpService implements AuthorService{


    constructor(private http:HttpClient , 
        @Inject("UserService") private userService:UserService
        ){

    }


    getAllAuthors(): Observable<Author[]> {
        
          return (<Observable<Author[]>>this.http
                          .get(url))
    }


    
     getAuthorById(authorId: string): Observable<Author> {
        return this.http
                        .get<Author>(`${url}/${authorId}`);
                      

    }

    _getOptions(){
        return {
            headers: this.userService.getAuthenticationHeader()
        }
    }

     addAuthor(author: Author): Observable<Author> {

        return this.http
                     .post<Author>(`${url}`,author , this._getOptions());
    }

    removeAuthor(authorId: string): Observable<void> {
        return this
                 .http
                 .delete<void>(`${url}/${authorId}` , this._getOptions());
    }


    updateAuthor(author: Author): Observable<Author> {
         
        return this
                .http
                .put<Author>(`${url}/${author.id}`, author , this._getOptions()); 
    }

}