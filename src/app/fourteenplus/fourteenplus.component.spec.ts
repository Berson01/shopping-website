import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenplusComponent } from './fourteenplus.component';

describe('FourteenplusComponent', () => {
  let component: FourteenplusComponent;
  let fixture: ComponentFixture<FourteenplusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourteenplusComponent]
    });
    fixture = TestBed.createComponent(FourteenplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
