import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { SimpleUserHttpService } from 'src/app/services/apiservices/http-user-service';
import { UserService } from 'src/app/services/apiservices/user-service';
import { User } from 'src/app/services/models/user';
import { compare } from 'src/app/utils/validators/compare.directive';
import { domainEmail } from 'src/app/utils/validators/custom-domain';
import { uniqueEmailValidator } from 'src/app/utils/validators/unique-email';

@Component({
  selector: 'user-register-screen',
  templateUrl: './user-register-screen.component.html',
  styleUrls: ['./user-register-screen.component.css']
})
export class UserRegisterScreenComponent implements OnInit {

  user?:User;
  status='';
  statusStyle='text-primary';

  regForm : FormGroup;
  constructor(
    private builder:FormBuilder,
    @Inject('UserService') private userService: UserService,
    private router:Router
  ) {

    const passwordRules=[
      Validators.required, 
      Validators.minLength(5),
      Validators.maxLength(15)
    ];

    this.regForm=this.builder.group({

      name: ['', [Validators.required]],
      email:['', [
                  Validators.required,
                  Validators.email, 
                  domainEmail('books.org','storian.in','storian.com','gmail.com')
                ],
                [
                  uniqueEmailValidator(userService)
                ]
            ],
      password:['',passwordRules],
      confirmpassword:['',passwordRules],
      profilePic:['https://randomuser.me/api/portraits/women/57.jpg',[Validators.required]]
    },{validator: compare('password','confirmpassword')} as AbstractControlOptions);

   }

  ngOnInit(): void {
  }

  handleRegistration(){

    if(this.regForm.invalid)
        return;


       this.user={

          ...this.regForm.value,
          roles:[
            {name:'user'}
          ],
          favoriteBooks:[],
          favoriteAuthors:[]
        
        };


        console.log('registering', this.user);

        (<Observable<User>>(this
          .userService
          .register(this.user!)
          ))
          .pipe(
            tap((response:any)=>console.log('response',response)),
          )
          .subscribe((user:any)=>{
            console.log('registered', user);
          })
        
  }

}
