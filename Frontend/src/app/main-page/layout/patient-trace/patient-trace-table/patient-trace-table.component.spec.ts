import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTraceTableComponent } from './patient-trace-table.component';

describe('PatientTraceTableComponent', () => {
  let component: PatientTraceTableComponent;
  let fixture: ComponentFixture<PatientTraceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientTraceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTraceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
