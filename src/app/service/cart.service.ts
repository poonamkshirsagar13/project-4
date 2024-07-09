import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart} from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  emptyCart: Cart = localStorage.getItem("cart")? (JSON.parse(localStorage.getItem("cart"))):{ count: 0, products:[], total: 0 };
  private cart: BehaviorSubject<Cart> = new BehaviorSubject(this.emptyCart);
  constructor() {
    this.cart.subscribe((currentCart)=> currentCart && localStorage.setItem("cart",JSON.stringify(currentCart)));
  }
  addItem(item: any) {
      console.log("idmdf",item)
      const currentCart = this.cart.getValue();
      const existingItem = currentCart.products.find(product => product.id===item.id);
      existingItem ? (existingItem.count = existingItem.count+1):(currentCart.products.push({...item, count:1}));
      currentCart.count = currentCart.products.length;
      this.calculateTotal(currentCart);
      this.cart.next(currentCart);
  }

  getCart() {
    return this.cart;
  }

  removeItem(id: number) {
    const currentCart = this.cart.getValue();
    const productToRemove = currentCart.products.find(p => p.id === id);
    currentCart.products = currentCart.products.filter(p => p.id !== id);
    currentCart.count = currentCart.products.length;
    this.calculateTotal(currentCart);
    this.cart.next(currentCart);
  }

  calculateTotal(currentCart:any){
    currentCart.total = currentCart.products.reduce((previousTotal:any, item:any)=>{ return previousTotal + item.price*item.count }, 0);;
  }

  incrementCount(id:number){
    const currentCart = this.cart.getValue();
    currentCart.products.forEach((product)=> {
      if(product.id===id){
        product.count++
      }
    });
    this.calculateTotal(currentCart);
    this.cart.next(currentCart);
  }

  decrementCount(id:number){
    let isProductCountZero = false;
    const currentCart=this.cart.getValue();
    currentCart.products.forEach((product)=>{
      if(product.id===id){
        product.count--
        if(product.count===0){
         isProductCountZero = true;
        }
      }
    });
    isProductCountZero && this.removeItem(id)
    this.calculateTotal(currentCart);
    this.cart.next(currentCart);
  }
  
}  
 
