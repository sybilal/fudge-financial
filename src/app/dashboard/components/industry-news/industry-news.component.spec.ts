import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryNewsComponent } from './industry-news.component';

describe('IndustryNewsComponent', () => {
  let component: IndustryNewsComponent;
  let fixture: ComponentFixture<IndustryNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
