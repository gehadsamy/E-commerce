import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { NavbarModule} from 'angular-bootstrap-md'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule } from '../app-routing.module';
import {RouterModule} from '@angular/router';
// import { formeModule } from '../forms/forms.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    NavbarModule,
    CommonModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    RouterModule
    // formeModule
  ]
})
export class SharedModule { }
