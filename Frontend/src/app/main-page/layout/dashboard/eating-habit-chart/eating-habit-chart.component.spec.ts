import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatingHabitChartComponent } from './eating-habit-chart.component';

describe('EatingHabitChartComponent', () => {
  let component: EatingHabitChartComponent;
  let fixture: ComponentFixture<EatingHabitChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatingHabitChartComponent ]
    })
    .compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(EatingHabitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
