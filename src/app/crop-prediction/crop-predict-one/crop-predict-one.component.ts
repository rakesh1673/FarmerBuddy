import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crop-predict-one',
  templateUrl: './crop-predict-one.component.html',
  styleUrls: ['./crop-predict-one.component.scss']
})
export class CropPredictOneComponent implements OnInit {

  crop: string = '';

  constructor() {}

  ngOnInit() {
  }

  submit(x: NgForm) {
    console.log(x);
    if(x.value.season === 'kharif' && x.value.soil === 'red' && x.value.waterRequired === 'medium' && x.value.temperature === 'humid' && x.value.avgDays === '4m') {
      setTimeout(() => {
        this.crop = 'Rice';
      }, 1000);
    } else if(x.value.season === 'kharif' && x.value.soil === 'black' && x.value.waterRequired === 'high' && x.value.temperature === 'subhumid' && x.value.avgDays === '6m') {
      setTimeout(() => {
        this.crop = 'Cotton';
      }, 1000);
    } else if(x.value.season === 'kharif' && x.value.soil === 'red' && x.value.waterRequired === 'high' && x.value.temperature === 'subhumid' && x.value.avgDays === '6m') {
      setTimeout(() => {
        this.crop = 'Cotton';
      }, 1000);
    } else if(x.value.season === 'kharif' && x.value.soil === 'alluvial' && x.value.waterRequired === 'high' && x.value.temperature === 'humid' && x.value.avgDays === '12m') {
      setTimeout(() => {
        this.crop = 'Sugarcane';
      }, 1000);
    } else if(x.value.season === 'rabi' && x.value.soil === 'alluvial' && x.value.waterRequired === 'high' && x.value.temperature === 'humid' && x.value.avgDays === '12m') {
      setTimeout(() => {
        this.crop = 'Sugarcane';
      }, 1000);
    } else if(x.value.season === 'zaid' && x.value.soil === 'alluvial' && x.value.waterRequired === 'high' && x.value.temperature === 'humid' && x.value.avgDays === '12m') {
      setTimeout(() => {
        this.crop = 'Sugarcane';
      }, 1000);
    } else if(x.value.season === 'kharif' && x.value.soil === 'red' && x.value.waterRequired === 'normal' && x.value.temperature === 'subhumid' && x.value.avgDays === '6m') {
      setTimeout(() => {
        this.crop = 'Tomato';
      }, 1000);
    } else if(x.value.season === 'rabi' && x.value.soil === 'red' && x.value.waterRequired === 'normal' && x.value.temperature === 'subhumid' && x.value.avgDays === '6m') {
      setTimeout(() => {
        this.crop = 'Tomato';
      }, 1000);
    } else if(x.value.season === 'kharif' && x.value.soil === 'red' && x.value.waterRequired === 'normal' && x.value.temperature === 'humid' && x.value.avgDays === '4m') {
      setTimeout(() => {
        this.crop = 'Maize';
      }, 1000);
    } else if(x.value.season === 'zaid' && x.value.soil === 'red' && x.value.waterRequired === 'normal' && x.value.temperature === 'subhumid' && x.value.avgDays === '4m') {
      setTimeout(() => {
        this.crop = 'Potato';
      }, 1000);
    } else if(x.value.season === 'rabi' && x.value.soil === 'alluvial' && x.value.waterRequired === 'medium' && x.value.temperature === 'humid' && x.value.avgDays === '4m') {
      setTimeout(() => {
        this.crop = 'Sunflower';
      }, 1000);
    } else if(x.value.season === 'kharif' && x.value.soil === 'alluvial' && x.value.waterRequired === 'medium' && x.value.temperature === 'humid' && x.value.avgDays === '4m') {
      setTimeout(() => {
        this.crop = 'Sunflower';
      }, 1000);
    } else if(x.value.season === 'rabi' && x.value.soil === 'loamy' && x.value.waterRequired === 'high' && x.value.temperature === 'subhumid' && x.value.avgDays === '12m') {
      setTimeout(() => {
        this.crop = 'Banana';
      }, 1000);
    } else if(x.value.season === 'kharif' && x.value.soil === 'loamy' && x.value.waterRequired === 'high' && x.value.temperature === 'subhumid' && x.value.avgDays === '12m') {
      setTimeout(() => {
        this.crop = 'Banana';
      }, 1000);
    } else {
      setTimeout(() => {
        this.crop = 'Please try with different combination';
      }, 1500)
    }

  }



}
