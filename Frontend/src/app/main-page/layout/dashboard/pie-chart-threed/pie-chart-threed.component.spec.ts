import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartThreedComponent } from './pie-chart-threed.component';

describe('PieChartThreedComponent', () => {
  let component: PieChartThreedComponent;
  let fixture: ComponentFixture<PieChartThreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartThreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartThreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
