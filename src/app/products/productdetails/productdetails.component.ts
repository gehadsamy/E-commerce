import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MyCartService } from 'src/app/services/my-cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  id;
  item;

  constructor(private activatedRoute: ActivatedRoute, private cartService :MyCartService , private isLoggedInService: LoginService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => this.id = +params['id']);
    // this.activatedRoute.paramMap.subscribe(params => this.id = +params['id'])
    // console.log(this.id);
    this.item = history.state.data;
    if(history.state.data !== undefined){
      this.item = history.state.data;
      localStorage.setItem("item", JSON.stringify(this.item));
    }else{
      this.item = JSON.parse(localStorage.getItem("item"));
    }
    // console.log(this.item)
  }

  addtoCart(item){
    this.cartService.addtoCart(item)
  }
  logOut() {
    this.isLoggedInService.updateHasLoggedIn(false);
  }
}
