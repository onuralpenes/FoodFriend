import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProffessionalsComponent } from './all-proffessionals.component';

describe('AllProffessionalsComponent', () => {
  let component: AllProffessionalsComponent;
  let fixture: ComponentFixture<AllProffessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProffessionalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProffessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
