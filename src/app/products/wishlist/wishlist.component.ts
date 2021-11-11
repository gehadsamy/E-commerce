import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store
      .select('wishlist')
      .subscribe((data) => this.wishlist = data.wishlist);
  }

}
