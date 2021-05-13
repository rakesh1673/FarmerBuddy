import { NgxYazuoSidenavModule } from 'ngx-yazuo-sidenav';
import { PagesListComponent } from './pages-list/pages-list.component';
import { PagesComponent } from './pages/pages.component';
import { TipsNavbarComponent } from './tips-navbar/tips-navbar.component';
import { IndexModule } from './../oshop/index/index.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsNewsRoutingModule } from './tips-news-routing.module';
import { TipsNewsComponent } from './tips-news.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TipsHomeComponent } from './tips-home/tips-home.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    TipsNewsComponent,
    TipsNavbarComponent,
    PagesComponent,
    PagesListComponent,
    TipsHomeComponent
  ],
  imports: [
    CommonModule,
    TipsNewsRoutingModule,
    IndexModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MDBBootstrapModule.forRoot(),
    NgxYazuoSidenavModule.forRoot(),
    MatTabsModule
  ],
  exports: [
    TipsNavbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class TipsNewsModule { }
