import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.css']
})
export class FavoriteCardComponent implements OnInit {

  constructor() { }

  @Input() book:any;
  ngOnInit(): void {
    
    this.book =this.book.book;
    console.log(this.book);
    
    
  }

}
