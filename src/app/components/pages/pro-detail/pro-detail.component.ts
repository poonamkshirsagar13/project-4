import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServiceService } from 'src/app/service/all-service.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { StdPopupComponent } from '../../popUp/std-popup/std-popup.component';


@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.css']
})

export class ProDetailComponent {
  productDetail!: any;
  item: any;
  constructor(private activatedRoute: ActivatedRoute,private allServiceService:AllServiceService, 
    public dialog: MatDialog, public dialogRef: MatDialogRef<StdPopupComponent>,
    private router: Router,private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.allServiceService.getProductDetail(params['id']).subscribe((product)=>{
        this.productDetail = product;
      });
    });
    
  }  

  addCart(){
    console.log("mmmm",this.productDetail)
    this.cartService.addItem(this.productDetail)
    this.router.navigate(['/cart'])
    // console.log("pop")
    // this.pop()
    
  }
  buy(){
    this.router.navigate(['/login'])
  }

  pop(){
     this.dialog.open(StdPopupComponent, {
     width: '500px',
     height: '500px',
     panelClass: 'my-class',
     });
    //  this.dialogRef.close();
  }
}

