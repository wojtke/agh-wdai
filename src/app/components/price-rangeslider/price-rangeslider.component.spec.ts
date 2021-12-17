import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangesliderComponent } from './price-rangeslider.component';

describe('PriceRangesliderComponent', () => {
  let component: PriceRangesliderComponent;
  let fixture: ComponentFixture<PriceRangesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceRangesliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRangesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
