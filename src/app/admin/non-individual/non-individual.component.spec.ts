import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonIndividualComponent } from './non-individual.component';

describe('NonIndividualComponent', () => {
  let component: NonIndividualComponent;
  let fixture: ComponentFixture<NonIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonIndividualComponent]
    });
    fixture = TestBed.createComponent(NonIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
