import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateNavComponent } from './paginate-nav.component';

describe('PaginateNavComponent', () => {
  let component: PaginateNavComponent;
  let fixture: ComponentFixture<PaginateNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginateNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
