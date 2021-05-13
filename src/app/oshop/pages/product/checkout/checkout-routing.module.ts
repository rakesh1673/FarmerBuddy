import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from 'src/app/oshop/shared/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: 'shipping-details',
        component: ShippingDetailsComponent,
      },
      {
        path: 'billing-details',
        component: BillingDetailsComponent,
      },
      {
        path: 'result',
        component: ResultComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
