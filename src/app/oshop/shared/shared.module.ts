import { AdminGuard } from './guards/admin-guard';
import { AuthGuard } from './guards/auth-guard';
import { ShippingService } from './services/shipping.service';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { FilterByBrandPipe } from './pipes/filterByBrand.pipe';
import { ProductService } from './services/product.service';
import { environment } from './../../../environments/environment';
import { ToastrService } from './services/toastr.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NoProductsFoundComponent } from './components/no-products-found/no-products-found.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { MomentTimeAgoPipe } from './pipes/moment-time-ago.pipe';
import { TranslatePipe } from './pipes/translate.pipe';



@NgModule({
  declarations: [
    CardLoaderComponent,
    FilterByBrandPipe,
    NoProductsFoundComponent,
    PageNotFoundComponent,
    NoAccessComponent,
    MomentTimeAgoPipe,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxContentLoadingModule,
    NgxPaginationModule,
  ],
  exports:[
    FormsModule,
    RouterModule,
    MDBBootstrapModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CardLoaderComponent,
    NoProductsFoundComponent,
    PageNotFoundComponent,
    NoAccessComponent,
    FilterByBrandPipe,
    NgxPaginationModule,
    NgxContentLoadingModule,
    MomentTimeAgoPipe,
    TranslatePipe
  ],
  providers: [
    AuthService,
    UserService,
    ToastrService,
    ProductService,
    ShippingService,
    AuthGuard,
    AdminGuard,
    FormBuilder
  ],
})
export class SharedModule { }
