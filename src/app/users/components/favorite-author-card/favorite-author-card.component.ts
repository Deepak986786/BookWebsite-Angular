import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/services/models/author';

@Component({
  selector: 'favorite-author-card',
  templateUrl: './favorite-author-card.component.html',
  styleUrls: ['./favorite-author-card.component.css']
})
export class FavoriteAuthorCardComponent implements OnInit {

  constructor() { }
  @Input() author:any;
  ngOnInit(): void {
    this.author = this.author.author
    // console.log(this.author?.);
    
  }

}
