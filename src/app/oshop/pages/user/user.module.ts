import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserAccountComponent } from './user-account/user-account.component';


@NgModule({
  declarations: [
    UserComponent,
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    RouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
