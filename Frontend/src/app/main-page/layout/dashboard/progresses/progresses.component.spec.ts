import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressesComponent } from './progresses.component';

describe('ProgressesComponent', () => {
  let component: ProgressesComponent;
  let fixture: ComponentFixture<ProgressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
