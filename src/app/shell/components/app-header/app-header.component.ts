import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  loggedInUser:boolean=false;

  @Input() title:string="Books's Gallery";
  ngOnInit(): void {
    if(localStorage.getItem("user")){
      this.loggedInUser = true;
    }
  }

}
