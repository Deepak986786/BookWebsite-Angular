import { Observable } from "rxjs";
import { Author } from "../models/author";



export interface AuthorService{

    // getAllAuthors():Promise<Author[]>;
    // getAuthorById(authorId:string):Observable<Author>;
    // addAuthor(author:Author):Promise<Author>;
    // removeAuthor(authorId:string):Promise<void>;
    // updateAuthor(author:Author):Promise<Author>;

    getAllAuthors():Observable<Author[]>;
    getAuthorById(authorId:string):Observable<Author>;
    addAuthor(author:Author):Observable<Author>;
    removeAuthor(authorId:string):Observable<void>;
    updateAuthor(author:Author):Observable<Author>;
    
}