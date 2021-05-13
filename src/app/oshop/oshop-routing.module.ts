import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NoAccessComponent } from './shared/components/no-access/no-access.component';
import { IndexComponent } from './index/index.component';
import { OshopComponent } from './oshop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OshopComponent,
    children: [
      { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
      { path: 'products', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)},
      { path: 'users', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)},
      { path: 'no-access', component: NoAccessComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OshopRoutingModule { }
