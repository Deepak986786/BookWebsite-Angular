import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

   user:any;

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    // this.user = this.user.user;
    this.user = JSON.parse(this.user)
    this.user =this.user.user
    
    // console.log(this.user);
    
  }

}
