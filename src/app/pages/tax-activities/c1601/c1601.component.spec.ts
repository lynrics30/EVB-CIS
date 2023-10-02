import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1601Component } from './c1601.component';

describe('C1601Component', () => {
  let component: C1601Component;
  let fixture: ComponentFixture<C1601Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [C1601Component]
    });
    fixture = TestBed.createComponent(C1601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
