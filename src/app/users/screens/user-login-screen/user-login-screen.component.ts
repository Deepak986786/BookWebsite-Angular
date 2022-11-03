import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SimpleUserHttpService } from 'src/app/services/apiservices/http-user-service';
import { LoggedInDetails, LoginInfo, User } from 'src/app/services/models/user';

@Component({
  selector: 'user-login-screen',
  templateUrl: './user-login-screen.component.html',
  styleUrls: ['./user-login-screen.component.css']
})
export class UserLoginScreenComponent implements OnInit {
  
  loginInfo:LoginInfo={email:'',password:''};
  loggedInUser?:User;
  status:string='';

  form:FormGroup;

  constructor(private userService:SimpleUserHttpService ,
     private router:Router,
     private builder:FormBuilder
     ) {
      const passwordRules=[
        Validators.required, 
        Validators.minLength(5),
        Validators.maxLength(15)
      ];



      this.form= this.builder.group({

        email:['',[Validators.required,Validators.email]],
        password:['',passwordRules]
      });
    

      }

  ngOnInit(): void {
  }


   handleLogin(){
    
    try{ 

      this.loginInfo = {...this.form.value}
      
        this.userService
                    .login(this.loginInfo)
                   // .subscribe((user:User)=>this.loggedInUser = user);
                    .subscribe({
                      next:(info:LoggedInDetails)=>{
                        this.loggedInUser = info.user
                        this.router.navigate(['/']);
                      },
                      error:(err:any)=>{
                        this.status= `Error: ${err.status}`
                      }

                    })

      //console.log(this.loggedInUser);
      this.status =` please wait ...`
      // this.router.navigate(['/']);

    }catch(error:any){
      this.status=error.message;
    }
  }


}
