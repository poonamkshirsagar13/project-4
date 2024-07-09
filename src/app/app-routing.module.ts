import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldComponent } from './components/pages/gold/gold.component';
import { ProDetailComponent } from './components/pages/pro-detail/pro-detail.component';
import { DisplayPageComponent } from './components/display-page/display-page.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SliverComponent } from './components/pages/sliver/sliver.component';
import { StdPopupComponent } from './components/popUp/std-popup/std-popup.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';

const routes: Routes = [
  {path:'',component: DisplayPageComponent,pathMatch:'full'},
  {path:'home',component: DisplayPageComponent,pathMatch:'full'},
  {path:'gold',component: GoldComponent,pathMatch:'full'},
  {path:'sliver',component: SliverComponent,pathMatch:'full'},
  {path:'pro-detail',component: ProDetailComponent,pathMatch:'full'},
  {path:'cart',component: CartComponent,pathMatch:'full'},
  {path:'login',component: LoginComponent,pathMatch:'full'},
  {path:'profile',component: UserProfileComponent,pathMatch:'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
