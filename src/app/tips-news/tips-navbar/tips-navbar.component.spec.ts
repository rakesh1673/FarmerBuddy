import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsNavbarComponent } from './tips-navbar.component';

describe('TipsNavbarComponent', () => {
  let component: TipsNavbarComponent;
  let fixture: ComponentFixture<TipsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
