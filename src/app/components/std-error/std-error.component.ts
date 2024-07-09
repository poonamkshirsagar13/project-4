import { Component,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-std-error',
  templateUrl: './std-error.component.html',
  styleUrls: ['./std-error.component.css']
})
export class StdErrorComponent {
  @Input('control') control!: FormControl<any>;

  getMessage() {
    console.log("err",this.control.errors)
    return this.control.dirty && this.control.errors ? this.getErrorMessage(Object.keys(this.control.errors)[0]) : "";
  }

  errorMessageMap = {
    required: "Please enter a value",
    pattern: "Please enter correct value according to pattern",
    minlength: "Please enter minimum length required",
    maxlength:"Maximum Lenght is 10"
  }
  
  getErrorMessage(key) {
    return this.errorMessageMap[key];
  }

}
