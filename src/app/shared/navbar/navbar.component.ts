import { Component, OnInit } from '@angular/core';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { MyCartService } from 'src/app/services/my-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public totalItem:number;
  faShoppingBag = faShoppingCart;

  constructor(private cartService: MyCartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
