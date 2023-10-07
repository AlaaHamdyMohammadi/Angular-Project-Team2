import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar2ChartsComponent } from './bar2-charts.component';

describe('Bar2ChartsComponent', () => {
  let component: Bar2ChartsComponent;
  let fixture: ComponentFixture<Bar2ChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bar2ChartsComponent]
    });
    fixture = TestBed.createComponent(Bar2ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
