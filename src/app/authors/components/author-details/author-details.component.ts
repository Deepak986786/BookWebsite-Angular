import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/services/models/author';

@Component({
  selector: 'author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  constructor() { }

  @Input()  author?:Author;

  ngOnInit(): void {
    
  }
  
 
}
