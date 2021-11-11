import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SharedModule } from '../shared/shared.module';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AppRoutingModule } from '../app-routing.module';
import { formeModule } from '../forms/forms.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


 
@NgModule({
  declarations: [
    ProductlistComponent,
    ProductdetailsComponent,
    ProductcardComponent,
    WishlistComponent,
    MyCartComponent
  ],
  exports : [   ProductlistComponent,
    ProductdetailsComponent,
    ProductcardComponent,
    WishlistComponent,
    MyCartComponent],
    imports: [CommonModule , SharedModule,AppRoutingModule,formeModule,    NgbModule,
      FontAwesomeModule,
      MDBBootstrapModule.forRoot()
    ],
})
export class ProductsModule { }
