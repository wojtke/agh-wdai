import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dish2Component } from './dish2.component';

describe('Dish2Component', () => {
  let component: Dish2Component;
  let fixture: ComponentFixture<Dish2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dish2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dish2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
