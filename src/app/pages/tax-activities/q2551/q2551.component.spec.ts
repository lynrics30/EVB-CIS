import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q2551Component } from './q2551.component';

describe('Q2551Component', () => {
  let component: Q2551Component;
  let fixture: ComponentFixture<Q2551Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Q2551Component]
    });
    fixture = TestBed.createComponent(Q2551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
