import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IndexModule } from './../oshop/index/index.module';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { MenusComponent } from './menus/menus.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PostsComponent } from './posts/posts.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

export function adminHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/admin', '.json');
}

@NgModule({
  declarations: [
    AdminComponent,
    AdminNavbarComponent,
    MenusComponent,
    EditMenuComponent,
    ConfirmationDialogComponent,
    PostsComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxDatatableModule,
    FormsModule,
    IndexModule,
    MatDialogModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: adminHttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  entryComponents:[EditMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AdminModule { }
