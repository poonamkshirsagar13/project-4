import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import $ from 'jquery';
const unamePattern = "^[0-9][a-z]{4,10}$";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  myForm!: FormGroup;
  formInputs: any[] = [{
    label: 'First Name',
    type: 'text',
    placeholder: 'Enter First Name',
    control:'firstname',
    formControl: {value: '', validators: [Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$')], updateOn: 'blur'}
  },{
    label: 'Last Name',
    type: 'text',
    placeholder: 'Enter Last Name',
    control:'lastname',
    formControl: {value: '', validators: [Validators.required,Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$')], updateOn: 'blur'}
  },{
    label: 'Email',
    type: 'email',
    placeholder: 'Email',
    control:'email',
    formControl: {value: '', validators: [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)], updateOn: 'blur'}
  },{
    label:'Mobile Number',
    type: 'number',
    placeholder: 'Mobile Number',
    control:'mobile',
    formControl: {value: '', validators: [Validators.required,Validators.minLength(10), Validators.pattern("[0-9]{0-10}")], updateOn: 'blur'}
  },{
    label: 'Password',
    type: 'password',
    placeholder: 'Enter Password',
    control:'pass',
    formControl: {value: '', validators: [Validators.required,Validators.maxLength(8), Validators.pattern(unamePattern)]}
  },{
    label: 'ReEnter Password',
    type: 'password',
    placeholder: 'Enter Password',
    control:'password',
    formControl: {value: '', validators: [Validators.required,Validators.maxLength(8), Validators.pattern(unamePattern)]}
  },{
    label: 'Upload',
    type: 'file',
    placeholder: 'upload',
    control:'upload',
    formControl: {value: undefined, validators:[Validators.required]}
  }];
  preview:undefined;
  loading: boolean = false; 
  file: File = null; 

constructor(private fb: FormBuilder,private router:Router) { 
  this.createForm();
}  

  ngOnInit(): void {}


  back(){
  this.router.navigate(['/home']);
  }


  createForm() {
    this.myForm = new FormGroup({});
    this.formInputs.forEach((input)=> this.myForm.addControl(input.value, {validators: input.validators, updateOn: input.updateOn || 'change'}));
    
  }
  save(){
    console.log("slve",this.myForm.value)
    localStorage.setItem("User",JSON.stringify(this.myForm.value));
  }
}
