import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nameInput: [
        null,
        [Validators.required, Validators.pattern('^[a-zA-Z]+$')],
      ],
      emailInput: [null, [Validators.required, Validators.email]],
      passwordInput :[null ,[Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}')]],
      confirmPassword:[null ,[Validators.required]]
    },
    {
      validators: [this.matching('passwordInput', 'confirmPassword')]
    });
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }
  get nameInput() { return this.registerForm.get('nameInput'); }
  get emailInput() { return this.registerForm.get('emailInput'); }
  get passwordInput() { return this.registerForm.get('passwordInput'); }
 

  submitReactiveForm() {
    // console.log(this.registerForm.value); 
  }

  matching(str: string, matchStr: string){
    return(formGroup: FormGroup)=>{
      const pass = formGroup.controls[str]
      const matchPass = formGroup.controls[matchStr]
      if(matchPass.errors && !matchPass.errors.matching){
        return
      }
      if(pass.value !== matchPass.value){
        matchPass.setErrors({matching:true})
      }else{
        matchPass.setErrors(null)
      }
    }
  }

  address(){
    this.router.navigateByUrl('address');
  }
  
  unSaved: boolean = true;        
  // constructor() { }

  canDeactivate(): Observable<boolean> | boolean {


      if (this.unSaved) {

        const result = window.confirm('There are unsaved changes! Are you sure?');

         return result
      }
      return true;
  } 

}
