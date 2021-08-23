import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTraceComponent } from './patient-trace.component';

describe('PatientTraceComponent', () => {
  let component: PatientTraceComponent;
  let fixture: ComponentFixture<PatientTraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientTraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
