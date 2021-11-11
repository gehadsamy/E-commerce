import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './Auth/can-activate.guard';
import { DeActivateGuard } from './Auth/de-activate.guard';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { MyCartComponent } from './products/my-cart/my-cart.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { WishlistComponent } from './products/wishlist/wishlist.component';

const routes: Routes = [
  // { path: 'address', component: AddAddressComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent  , canDeactivate : [DeActivateGuard]},
  {path:'', component: ProductlistComponent},
  {path:'details/:id', component: ProductdetailsComponent,
  canActivate : [CanActivateGuard]},
  {path: 'mycart', component: MyCartComponent},
  {path: 'wishlist', component: WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
