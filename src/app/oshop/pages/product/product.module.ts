import { OwlModule } from 'ngx-owl-carousel';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BestProductComponent } from './best-product/best-product.component';
import { CartCalculatorComponent } from './cart-calculator/cart-calculator.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { FavouriteProductsComponent } from './favourite-products/favourite-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    BestProductComponent,
    CartCalculatorComponent,
    CartProductsComponent,
    FavouriteProductsComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    SharedModule,
    OwlModule
  ],
  exports: [BestProductComponent]
})
export class ProductModule { }
