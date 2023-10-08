import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialsComponent } from './detials.component';

describe('DetialsComponent', () => {
  let component: DetialsComponent;
  let fixture: ComponentFixture<DetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetialsComponent]
    });
    fixture = TestBed.createComponent(DetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
