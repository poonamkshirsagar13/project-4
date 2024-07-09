import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent {
  constructor( ){}
  route:Route | undefined
  ngOnInit(): void {
  
  }
}
