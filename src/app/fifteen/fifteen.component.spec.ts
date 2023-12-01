import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifteenComponent } from './fifteen.component';

describe('FifteenComponent', () => {
  let component: FifteenComponent;
  let fixture: ComponentFixture<FifteenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifteenComponent]
    });
    fixture = TestBed.createComponent(FifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
