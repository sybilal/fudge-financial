import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsChartsComponent } from './goals-charts.component';

describe('GoalsChartsComponent', () => {
  let component: GoalsChartsComponent;
  let fixture: ComponentFixture<GoalsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
