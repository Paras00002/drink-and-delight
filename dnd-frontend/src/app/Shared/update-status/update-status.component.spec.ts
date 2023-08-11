import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatusComponent } from './update-status.component';

describe('UpdateStatusComponent', () => {
  let component: UpdateStatusComponent;
  let fixture: ComponentFixture<UpdateStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStatusComponent]
    });
    fixture = TestBed.createComponent(UpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
