import { LoginComponent } from './../oshop/index/login/login.component';
import { CropPredictOneComponent } from './crop-predict-one/crop-predict-one.component';
import { CropPredictionComponent } from './crop-prediction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CropPredictionComponent,
    children: [
      { path: '', component: CropPredictOneComponent },
      { path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropPredictionRoutingModule { }
