import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EatingActivityComponent } from './eating-activity.component';

describe('EatingActivityComponent', () => {
  let component: EatingActivityComponent;
  let fixture: ComponentFixture<EatingActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatingActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
