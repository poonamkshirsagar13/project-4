import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-std-input',
  templateUrl: './std-input.component.html',
  styleUrls: ['./std-input.component.css']
})
export class StdInputComponent {
  @Input('formInput') input: any;
  @Input('control')
  control!: FormControl<any>;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onUpload(event) {
    const imagePreview: any = document.getElementById('imagePreview');
    imagePreview.src = URL.createObjectURL(event.target.files[0]);
    imagePreview.onload = () => {
      URL.revokeObjectURL(imagePreview.src) // free memory
    }
  }  
}
