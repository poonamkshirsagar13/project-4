import { Component,OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_LIST,Menu } from 'src/app/models/menu';
import { CartService } from 'src/app/service/cart.service';
import { Cart } from 'src/app/models/cart';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router,private cartService: CartService) { }
  @Input() menux!: Menu;
  menuList: Menu[] = MENU_LIST;
  count = 0;

  navigate(menuPath: string) {
    MENU_LIST.forEach((menu) => menu.isClick = false);
    const clickedMenu: Menu| undefined = MENU_LIST.find((menu) => menu.path === menuPath);
    clickedMenu && (clickedMenu.isClick = true);
    this.router.navigate([menuPath]);
    console.log("menu", menuPath)
    console.log("menu");

  }
  cart(){
    this.router.navigate(['/cart'])
  }

  login(){
    this.router.navigate(['/login'])
  }
  
  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart:Cart)=> {
      console.log(cart.count);
      this.count = cart.count;
    })
  }
  
  profile(){
    console.log("profile")
    this.router.navigate(['/profile'])
  }
}
