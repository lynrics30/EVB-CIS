import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaintaComponent } from './cainta.component';

describe('CaintaComponent', () => {
  let component: CaintaComponent;
  let fixture: ComponentFixture<CaintaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaintaComponent]
    });
    fixture = TestBed.createComponent(CaintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
