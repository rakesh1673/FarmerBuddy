import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { CheckoutNavbarComponent } from './checkout-navbar/checkout-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ResultComponent } from './result/result.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    BillingDetailsComponent,
    CheckoutNavbarComponent,
    ProductsComponent,
    ResultComponent,
    ShippingDetailsComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule
  ],
  exports: [CheckoutComponent]
})
export class CheckoutModule { }
