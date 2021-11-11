import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedIn;
  constructor(private isLoggedInService: LoginService) { }

  ngOnInit(): void {
  }
  submitloginPage(formsValue) {
    // console.log(formsValue);
    
  }
  loginFormSubmit() {
    this.isLoggedInService.updateHasLoggedIn(true)
    alert("Hello! email : You have been logged in successfully, you can route to the cart now")
    
  }
}
