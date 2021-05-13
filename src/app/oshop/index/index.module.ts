import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProductModule } from './../pages/product/product.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    SharedModule,
    ProductModule,
    AngularFirestoreModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [NavbarComponent, FooterComponent, LoginComponent,]
})
export class IndexModule { }
