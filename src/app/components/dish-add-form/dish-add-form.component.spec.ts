import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishAddFormComponent } from './dish-add-form.component';

describe('DishAddFormComponent', () => {
  let component: DishAddFormComponent;
  let fixture: ComponentFixture<DishAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
