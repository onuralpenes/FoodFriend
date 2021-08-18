import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedCalorieComponent } from './consumed-calorie.component';

describe('ConsumedCalorieComponent', () => {
  let component: ConsumedCalorieComponent;
  let fixture: ComponentFixture<ConsumedCalorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumedCalorieComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumedCalorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
