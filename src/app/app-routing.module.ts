import { LoginComponent } from './oshop/index/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './oshop/shared/guards/admin-guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'oshop', loadChildren: () => import('./oshop/oshop.module').then(m => m.OshopModule) },
  { path: 'news-tips', loadChildren: () => import('./tips-news/tips-news.module').then(m => m.TipsNewsModule) },
  { path: 'crop-prediction', loadChildren: () => import('./crop-prediction/crop-prediction.module').then(m => m.CropPredictionModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
