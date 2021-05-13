import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { FavouriteProductsComponent } from './favourite-products/favourite-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { IndexComponent } from './../../index/index.component';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'all-products', component: ProductListComponent },
      { path: 'favourite-products', component: FavouriteProductsComponent },
      { path: 'cart-items', component: CartProductsComponent },
      { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
      { path: 'product/:id', component: ProductDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
