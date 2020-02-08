import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdvertisementsService } from 'advertissements/advertisements.service';
import { AdvertisementComponent } from 'advertissements/advertisements.component';
import { RatingsComponent } from 'ratings/ratings.component';
import { ProductComponent } from 'Product/product.component';
import { ProductsService } from 'Product/product.service';
import { ProductsComponent } from 'Products/products.component';

@NgModule({
  declarations: [
    AppComponent, AdvertisementComponent, RatingsComponent, ProductComponent, ProductsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AdvertisementsService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
