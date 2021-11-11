import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCartService {

  public cartItemlist : any = [];
  public list = new BehaviorSubject<any>([]);
  checkItem;

  constructor() { }

  getProducts(){
    return this.list.asObservable();
  }

  setProduct(product : any){
    this.cartItemlist.push(...product);
    this.list.next(product);
  }

  addtoCart(p : any){
    let product = Object.assign({}, p)
    this.checkItem = this.cartItemlist.findIndex((obj => obj.id == product.id));
    if(this.checkItem == -1){
      this.cartItemlist.push(product);
    } else {
      this.cartItemlist[this.checkItem].quantity += 1
      this.cartItemlist[this.checkItem].total = this.cartItemlist[this.checkItem].quantity * this.cartItemlist[this.checkItem].price
    }
    this.list.next(this.cartItemlist);
    this.getTotalPrice();
    // console.log(this.cartItemlist)
  }
  
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemlist.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemlist.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemlist.splice(index,1);
      }
    })
    this.list.next(this.cartItemlist);
  }

  removeAllCart(){
    this.cartItemlist = []
    this.list.next(this.cartItemlist);
  }

  increaseItem(id){
    this.checkItem = this.cartItemlist.findIndex((obj => obj.id == id));
    this.cartItemlist[this.checkItem].quantity += 1
    this.cartItemlist[this.checkItem].total = this.cartItemlist[this.checkItem].quantity * this.cartItemlist[this.checkItem].price
    this.getTotalPrice();
    this.list.next(this.cartItemlist);
  }

  decreaseItem(id){
    this.checkItem = this.cartItemlist.findIndex((obj => obj.id == id));
    if(this.cartItemlist[this.checkItem].quantity == 1){
      this.removeCartItem(this.cartItemlist[this.checkItem])
    } else {
      this.cartItemlist[this.checkItem].quantity -= 1
      this.cartItemlist[this.checkItem].total = this.cartItemlist[this.checkItem].quantity * this.cartItemlist[this.checkItem].price
    }
    this.getTotalPrice();
    this.list.next(this.cartItemlist);
  }
}
