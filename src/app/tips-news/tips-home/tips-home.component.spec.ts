import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsHomeComponent } from './tips-home.component';

describe('TipsHomeComponent', () => {
  let component: TipsHomeComponent;
  let fixture: ComponentFixture<TipsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
