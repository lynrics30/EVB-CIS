import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtinComponent } from './addtin.component';

describe('AddtinComponent', () => {
  let component: AddtinComponent;
  let fixture: ComponentFixture<AddtinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtinComponent]
    });
    fixture = TestBed.createComponent(AddtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
