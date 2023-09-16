import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychometricTestComponent } from './psychometric-test.component';

describe('PsychometricTestComponent', () => {
  let component: PsychometricTestComponent;
  let fixture: ComponentFixture<PsychometricTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsychometricTestComponent]
    });
    fixture = TestBed.createComponent(PsychometricTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
