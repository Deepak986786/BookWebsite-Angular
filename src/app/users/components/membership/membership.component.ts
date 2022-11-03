import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleUserHttpService } from 'src/app/services/apiservices/http-user-service';
import { LoggedInDetails, LoginInfo } from 'src/app/services/models/user';

@Component({
  selector: 'membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  constructor(private userService:SimpleUserHttpService , private router:Router) { }

  user?: any;

  updateUserStatus(details:any): void {
    
    if(details)
      this.user=details.user;
    else
      this.user=undefined;

  }


  ngOnInit(): void {
    var details= this.userService.getLoggedInUser();
    if(details)
       this.user=details.user;


       this
       .userService
       .getUserStatusAnnouncement()
       .subscribe(details=>this.updateUserStatus(details))   
  }


   dummyLogin(){
        this.userService.login({email:"rahul108@gmail.com", password:"pass2"})
                .subscribe(user=>this.user = user);
      console.log(this.user);
  }

  // async handleLogin(){
  //   await this.userService.login(this.loginInfo);
  // }

  ngOnDestroy():void {
    this.userService.getUserStatusAnnouncement().unsubscribe();
  }

async handleLogout(){
      await this.userService.logout();
      this.router.navigate(['/user/login']);
  }

}
