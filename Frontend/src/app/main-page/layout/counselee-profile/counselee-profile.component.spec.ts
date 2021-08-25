import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounseleeProfileComponent } from './counselee-profile.component';

describe('CounseleeProfileComponent', () => {
  let component: CounseleeProfileComponent;
  let fixture: ComponentFixture<CounseleeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounseleeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounseleeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
