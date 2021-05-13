import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropPredictOneComponent } from './crop-predict-one.component';

describe('CropPredictOneComponent', () => {
  let component: CropPredictOneComponent;
  let fixture: ComponentFixture<CropPredictOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropPredictOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropPredictOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
