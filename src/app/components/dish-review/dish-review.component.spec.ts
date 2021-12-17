import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishReviewComponent } from './dish-review.component';

describe('DishReviewComponent', () => {
  let component: DishReviewComponent;
  let fixture: ComponentFixture<DishReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
