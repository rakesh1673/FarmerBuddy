import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropPredictionRoutingModule } from './crop-prediction-routing.module';
import { CropPredictionComponent } from './crop-prediction.component';
import { CropNavbarComponent } from './crop-navbar/crop-navbar.component';
import { CropPredictOneComponent } from './crop-predict-one/crop-predict-one.component';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    CropPredictionComponent,
    CropNavbarComponent,
    CropPredictOneComponent
  ],
  imports: [
    CommonModule,
    CropPredictionRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CropPredictionModule { }
