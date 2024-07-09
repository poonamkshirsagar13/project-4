import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  srNo:0 | undefined;
  id!: number;
  cart!:Cart ;
  index:number=0;
  total:number | undefined;
  qty:number;
  constructor(private cartService:CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
      this.total= cart.total;
      console.log("cat new value",this.cart)
      console.log("total",this.total)
      // this.qty= cart.qty;
    });
  }

  incrementQty(id:number){
    this.cartService.incrementCount(id);
  }

  decrementQty(id:number){
    console.log("Dec",id)
    this.cartService.decrementCount(id);
  }


  delete(id: number): void {
    this.cartService.removeItem(id);
  }

  buy(){
    this.router.navigate(['/login'])
  }


}

  