import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Announcement1Component } from './announcement1.component';

describe('Announcement1Component', () => {
  let component: Announcement1Component;
  let fixture: ComponentFixture<Announcement1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Announcement1Component]
    });
    fixture = TestBed.createComponent(Announcement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
