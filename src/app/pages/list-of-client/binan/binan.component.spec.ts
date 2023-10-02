import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinanComponent } from './binan.component';

describe('BinanComponent', () => {
  let component: BinanComponent;
  let fixture: ComponentFixture<BinanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BinanComponent]
    });
    fixture = TestBed.createComponent(BinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
