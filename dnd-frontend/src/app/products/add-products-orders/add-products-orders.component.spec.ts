import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsOrdersComponent } from './add-products-orders.component';

describe('AddProductsOrdersComponent', () => {
  let component: AddProductsOrdersComponent;
  let fixture: ComponentFixture<AddProductsOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductsOrdersComponent]
    });
    fixture = TestBed.createComponent(AddProductsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
