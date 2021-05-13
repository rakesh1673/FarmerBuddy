import { OwlModule } from 'ngx-owl-carousel';
import { SharedModule } from './shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IndexModule } from './index/index.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OshopRoutingModule } from './oshop-routing.module';
import { OshopComponent } from './oshop.component';


@NgModule({
  declarations: [
    OshopComponent
  ],
  imports: [
    CommonModule,
    OshopRoutingModule,
    IndexModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    OwlModule,
  ],
  exports: [
    IndexModule
  ]
})
export class OshopModule { }
