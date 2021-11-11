import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ADDWISHLIST, REMOVEWISHLIST } from 'src/app/store/wishlist/wishlist.action';


@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  @Input() item;
  @Input() wish;
  wishlist;

  constructor(private router: Router, private cartService: MyCartService, private store: Store<any>) { }

  ngOnInit(): void {
    this.store
      .select('wishlist')
      .subscribe((data) => this.wishlist = data.wishlist);
  }

  details(send){
    // this.router.navigate(['details/'+id]);
    this.router.navigateByUrl('/details/'+send.id, { state: {data: send} });
  }

  addToCart(){
    // console.log(this.item)
    // this.addtocart.emit();
  }

  addtoCart(item){
    this.cartService.addtoCart(item)
  }

  checkWishlist(item, event){
    if(event.srcElement.innerText == 'ADD TO WISHLIST'){
      this.store.dispatch(new ADDWISHLIST(item))
      event.srcElement.innerHTML = '<i class="fas fa-shopping-cart pr-2"></i>Remove from wishlist'
    }else{
      let newWishlist = this.wishlist.filter((wish) => wish.id != item.id)
      this.store.dispatch(new REMOVEWISHLIST(newWishlist))
      event.srcElement.innerHTML = '<i class="fas fa-shopping-cart pr-2"></i>Add to wishlist'
    }
  }

}
