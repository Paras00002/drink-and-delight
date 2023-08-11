import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsComponent } from './view-products.component';

describe('ViewProductsComponent', () => {
  let component: ViewProductsComponent;
  let fixture: ComponentFixture<ViewProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductsComponent]
    });
    fixture = TestBed.createComponent(ViewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
