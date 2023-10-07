import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbovrChartsComponent } from './AbovrChartsComponent';

describe('AbovrChartsComponent', () => {
  let component: AbovrChartsComponent;
  let fixture: ComponentFixture<AbovrChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbovrChartsComponent]
    });
    fixture = TestBed.createComponent(AbovrChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
