import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIngredientDistributionChartComponent } from './food-ingredient-distribution-chart.component';

describe('FoodIngredientDistributionChartComponent', () => {
  let component: FoodIngredientDistributionChartComponent;
  let fixture: ComponentFixture<FoodIngredientDistributionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodIngredientDistributionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodIngredientDistributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
