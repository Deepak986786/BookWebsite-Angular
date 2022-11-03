import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Book } from "../models/book";
import { BookService } from "./book-service";
import { UserService } from "./user-service";


let url="https://localhost:7041/api/book";

@Injectable({
    providedIn:'root'
})
export class SimpleBookHttpService implements BookService{

    constructor(
            private http:HttpClient ,
            @Inject("UserService") private userService:UserService
    ){}


    _getOptions(){
        return {
            headers: this.userService.getAuthenticationHeader()
        }
    }

    getAllBooks(): Observable<Book[]> {

     return this.http
                    .get<Book[]>(url)
                    .pipe(
                        map((books:Book[])=>books.map((b:any)=>({...b,author:b.author.name})))
                    )

    }

     getBookById(id: string): Observable<Book> {
        
        return this.http
                        .get<Book>(`${url}/${id}`)
    }

    addBook(book: Book): Observable<Book> {
        return this.http
                        .post<Book>(`${url}`,book ,this._getOptions());
    }

    removeBook(id: string): Observable<void> {
       return this.http
                        .delete<void>(`${url}/${id}`,this._getOptions())
    }

     updateBook(book: Book): Observable<Book> {
       return this.http
                        .put<Book>(`${url}/${book.id}`,book,this._getOptions())
    }

}