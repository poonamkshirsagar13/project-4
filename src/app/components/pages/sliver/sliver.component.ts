import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllServiceService } from 'src/app/service/all-service.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-sliver',
  templateUrl: './sliver.component.html',
  styleUrls: ['./sliver.component.css']
})
export class SliverComponent {
  cardData!:any
  item: any;
  id: number;
  constructor(private allServiceService:AllServiceService,private router: Router ){}
  ngOnInit(): void {
    this.loadData();
  }   

  loadData() {
    this.allServiceService.loadData().subscribe((resp)=>{
     this.cardData=resp.data
      console.log('cardData', this.cardData)
    });
  }

  selectProduct(id:number){
    console.log("select",id)
    this.router.navigate(['/pro-detail'], { queryParams: {id}})
  }
}
