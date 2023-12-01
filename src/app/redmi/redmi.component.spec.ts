import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedmiComponent } from './redmi.component';

describe('RedmiComponent', () => {
  let component: RedmiComponent;
  let fixture: ComponentFixture<RedmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedmiComponent]
    });
    fixture = TestBed.createComponent(RedmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
