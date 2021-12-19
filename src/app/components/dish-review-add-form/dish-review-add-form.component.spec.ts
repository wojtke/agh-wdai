import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishReviewAddFormComponent } from './dish-review-add-form.component';

describe('DishReviewAddFormComponent', () => {
  let component: DishReviewAddFormComponent;
  let fixture: ComponentFixture<DishReviewAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishReviewAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishReviewAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
