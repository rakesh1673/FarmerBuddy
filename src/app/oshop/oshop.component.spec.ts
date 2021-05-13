import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OshopComponent } from './oshop.component';

describe('OshopComponent', () => {
  let component: OshopComponent;
  let fixture: ComponentFixture<OshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
