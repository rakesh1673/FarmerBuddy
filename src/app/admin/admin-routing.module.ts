import { PostsComponent } from './posts/posts.component';
import { MenusComponent } from './menus/menus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from '../oshop/index/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'menus', component: MenusComponent },
      { path: 'posts', component: PostsComponent },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
