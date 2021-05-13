import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsNewsComponent } from './tips-news.component';

describe('TipsNewsComponent', () => {
  let component: TipsNewsComponent;
  let fixture: ComponentFixture<TipsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
