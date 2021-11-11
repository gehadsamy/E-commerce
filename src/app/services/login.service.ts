import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private hasLoggedIn = new BehaviorSubject(false);
  Logged = this.hasLoggedIn.asObservable();

  constructor() { }
  
  updateHasLoggedIn(logStatus) {
    this.hasLoggedIn.next(logStatus)
    this.Logged = logStatus;
  }}