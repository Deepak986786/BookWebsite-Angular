import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, Subject, tap, throwError } from "rxjs";
import { Author } from "../models/author";
import { Book } from "../models/book";
import { LoggedInDetails, LoginInfo, User } from "../models/user";
import { UserService } from "./user-service";



let url="https://localhost:7041/api/user";

@Injectable({
    providedIn:'root'
})
export class SimpleUserHttpService implements UserService{

    constructor(private http:HttpClient){

        if(!this.loggedInUser){
            var jsonStr = localStorage.getItem("user");
            if(jsonStr){
                var user = JSON.parse(jsonStr);
                this.updateCurrentUser(user);
            }
        }
    }
    
    getLoggedInUser(): LoggedInDetails | undefined {
        return this.loggedInUser;
    }
    getAuthenticationHeader() {
        if(!this.loggedInUser)
        return {};
        else
        return {
            Authorization:`BEARER ${this.loggedInUser.token}`
        };
    }
    
    users:User[]=[];
    
    loggedInUserAnnouncment = new Subject<LoggedInDetails|undefined>();
    loggedInUser?:LoggedInDetails;
    
    updateCurrentUser(user?:LoggedInDetails){
        this.loggedInUser=user;
        this.loggedInUserAnnouncment.next(user);
        if(this.loggedInUser)
        localStorage.setItem('user',JSON.stringify(this.loggedInUser));
        else
        localStorage.removeItem('user');
        
    }
    
    login(loginInfo: LoginInfo): Observable<LoggedInDetails> {
        return this
        .http
        .post<LoggedInDetails>(`${url}/login`,loginInfo)
        .pipe(
            tap( (info:LoggedInDetails)=>{
                console.log('user info received on login:',info);
                this.updateCurrentUser(info);
            })
            );
            
            
        }
        
        register(user: User):  Observable<User> {
            return this.http.post<User>(url , user,{headers:{
                "content-type":"application/json"
            }});
        }

        
        async getAllUsers(): Promise<User | undefined> {
            
            const response = await fetch(url);
            const users=await response.json()
            return users;
            
        }
        _handleError(error:HttpErrorResponse){
            if(error.status === 404){
                return of(false);  //return false as an observable result
            } else{
                return throwError(()=> error); //else let the error go
            }
        }
        isEmailRegistered(email: string): Observable<boolean> {
            
            return this
            .http
            .get(`${url}/validate/${email}`)
            .pipe(
                map(response=>true), //incase of no error
                catchError(this._handleError) //in case of error
                );
                
            }
            getUserStatusAnnouncement(): Subject<LoggedInDetails | undefined> {
                return this.loggedInUserAnnouncment;
            }
            logout(): Observable<void> {
                
                this.updateCurrentUser();
                return of(undefined);
            }
            
            // still works on promises
            
            getFavoriteBooksOfUser(email:string):Observable<Book[]>{
                // const response=await fetch(`${url}/${email}/favoritebooks`);
                // const fbooks = await response.json()
                // return fbooks;
                
                return this.http . get<Book[]>(`${url}/${email}/favoritebooks`)
                .pipe()
            }
            
            async getUserRoles(email:string){
                const response=await fetch(`${url}/${email}/roles`);
                const roles=await response.json()
                return roles;
            }
            
            getFavoriteAuthorsOfUser(email:string){
                // const response=await fetch(`${url}/${email}/favoriteauthors`);
                // const fauthors=await response.json()
                // return fauthors; 
                return this,this.http.get<Author[]>(`${url}/${email}/favoriteauthors`).pipe()  
            }
            
            AddFavoriteBooksOfUser(email: any, book: Book | undefined): Observable<any> {
                return this.http.post(`${url}/${email}/favoritebooks`,book)
            }
        }