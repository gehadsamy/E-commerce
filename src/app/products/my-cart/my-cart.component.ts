import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { MyCartService } from 'src/app/services/my-cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  faShoppingBag = faShoppingCart;

  public products : any = [];
  public grandTotal !: number;

  constructor(private cartService: MyCartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  minus(id){
    this.cartService.decreaseItem(id);
  }
  plus(id){
    this.cartService.increaseItem(id);
  }
}
