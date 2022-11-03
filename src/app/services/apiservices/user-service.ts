import { Observable, Subject } from "rxjs";
import { Author } from "../models/author";
import { Book } from "../models/book";
import { LoggedInDetails, LoginInfo, User } from "../models/user";


export interface UserService{
    AddFavoriteBooksOfUser(email: any, book: Book | undefined): Observable< any>;

    login(LoginInfo:LoginInfo):Observable<LoggedInDetails>|Promise<LoggedInDetails|undefined>;

    register(user:User):Observable<User>;

    getAllUsers():Promise<User|undefined>|Observable<User>;

    isEmailRegistered(email:string):Promise<boolean>|Observable<boolean>;

    getUserStatusAnnouncement():Subject<LoggedInDetails|undefined>;

    logout(): Observable<void>|Promise<void>;

    getAuthenticationHeader():any;

    getLoggedInUser():LoggedInDetails|undefined;

    //
    getFavoriteBooksOfUser(email:string): Observable<Book[]>;

    getFavoriteAuthorsOfUser(email:string):Observable<Author[]>;

    
}