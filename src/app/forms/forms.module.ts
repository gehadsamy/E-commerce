import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarModule } from 'angular-bootstrap-md';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports : [    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    NavbarModule,
SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MdbFormsModule,
    MdbValidationModule,
    FontAwesomeModule,
    MdbModalModule,

  ]
})
export class formeModule { }
