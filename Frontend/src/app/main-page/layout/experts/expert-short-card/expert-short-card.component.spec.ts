import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertShortCardComponent } from './expert-short-card.component';

describe('ExpertShortCardComponent', () => {
  let component: ExpertShortCardComponent;
  let fixture: ComponentFixture<ExpertShortCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertShortCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertShortCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
