import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPageComponent } from './components/display-page/display-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManuComponent } from './components/pages/manu/manu.component';
import { GoldComponent } from './components/pages/gold/gold.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProDetailComponent } from './components/pages/pro-detail/pro-detail.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { SliverComponent } from './components/pages/sliver/sliver.component';
import { LoginComponent } from './components/pages/login/login.component';
import { StdInputComponent } from './components/std-input/std-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { StdPopupComponent } from './components/popUp/std-popup/std-popup.component';
import { MatDialogModule, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { StdErrorComponent } from './components/std-error/std-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPageComponent,
    HeaderComponent,
    FooterComponent,
    ManuComponent,
    GoldComponent,
    ProDetailComponent,
    CartComponent,
    SliverComponent,
    LoginComponent,
    StdInputComponent,
    StdPopupComponent,
    UserProfileComponent,
    StdErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    FormsModule, 
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  providers: [{provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: []},],
  bootstrap: [AppComponent]
})
export class AppModule { }

