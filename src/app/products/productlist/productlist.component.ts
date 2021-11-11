import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  
  public list : any;
  public wishlist;

  constructor(private api: ProductsService, private cartService: MyCartService, private store: Store<any>) { }

  ngOnInit(): void {
    this.api.getProduct("https://fakestoreapi.com/products")
    .subscribe(
      res=>{
        this.list = res;
        this.list.forEach((a : any) => {
          Object.assign(a,{quantity:1,total:a.price})
        });
      }
    )

    this.store
      .select('wishlist')
      .subscribe((data) => this.wishlist = data.wishlist);
  }

  cart(item){
    // console.lsog(item)
  }
}
