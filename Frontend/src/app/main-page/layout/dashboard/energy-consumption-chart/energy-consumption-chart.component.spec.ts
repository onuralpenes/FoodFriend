import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyConsumptionChartComponent } from './energy-consumption-chart.component';

describe('EnergyConsumptionChartComponent', () => {
  let component: EnergyConsumptionChartComponent;
  let fixture: ComponentFixture<EnergyConsumptionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyConsumptionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyConsumptionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
