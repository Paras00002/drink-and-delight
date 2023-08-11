import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistributorComponent } from './add-distributor.component';

describe('AddDistributorComponent', () => {
  let component: AddDistributorComponent;
  let fixture: ComponentFixture<AddDistributorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDistributorComponent]
    });
    fixture = TestBed.createComponent(AddDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
