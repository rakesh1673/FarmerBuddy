import { PagesComponent } from './pages/pages.component';
import { TipsHomeComponent } from './tips-home/tips-home.component';
import { LoginComponent } from './../oshop/index/login/login.component';
import { TipsNewsComponent } from './tips-news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TipsNewsComponent,
    children: [
      { path: '', component: TipsHomeComponent },
      { path: 'pages/:url', component: PagesComponent},
      { path: 'login', component: LoginComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TipsNewsRoutingModule { }
