import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/services/models/author';

@Component({
  selector: 'author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {

  constructor() { }

  @Input()  author?: Author; 

  ngOnInit(): void {
  }

}
