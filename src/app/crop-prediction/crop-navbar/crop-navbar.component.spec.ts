import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropNavbarComponent } from './crop-navbar.component';

describe('CropNavbarComponent', () => {
  let component: CropNavbarComponent;
  let fixture: ComponentFixture<CropNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
