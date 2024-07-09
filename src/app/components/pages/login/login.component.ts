import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm!: FormGroup;
  input1: any;
  input2: any;

constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.input1 = {
      label: 'Name',
      type: 'text',
      placeholder: 'Enter Name',
      control:'username'

    };
    this.input2 = {
      label: 'Password',
      type: 'password',
      placeholder: 'Enter Password',
      control:'pass'
    };
  }

  unamePattern = "^[0-9][a-z]{4,10}$";

  
  createForm() {
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      pass:new FormControl('', [Validators.required, Validators.pattern(this.unamePattern)])
    });
  }

  

  login(){
    console.log("Login", this.myForm.value)
    console.log("username",this.myForm.get('username')?.value)
    console.log("pass",this.myForm.get('pass')?.value)
  }

}
