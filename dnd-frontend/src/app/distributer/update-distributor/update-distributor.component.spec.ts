import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDistributorComponent } from './update-distributor.component';

describe('UpdateDistributorComponent', () => {
  let component: UpdateDistributorComponent;
  let fixture: ComponentFixture<UpdateDistributorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDistributorComponent]
    });
    fixture = TestBed.createComponent(UpdateDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
