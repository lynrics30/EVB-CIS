import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinIssuanceUpdateComponent } from './tin-issuance-update.component';

describe('TinIssuanceUpdateComponent', () => {
  let component: TinIssuanceUpdateComponent;
  let fixture: ComponentFixture<TinIssuanceUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TinIssuanceUpdateComponent]
    });
    fixture = TestBed.createComponent(TinIssuanceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
