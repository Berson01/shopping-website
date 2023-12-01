import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepluselevenComponent } from './onepluseleven.component';

describe('OnepluselevenComponent', () => {
  let component: OnepluselevenComponent;
  let fixture: ComponentFixture<OnepluselevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnepluselevenComponent]
    });
    fixture = TestBed.createComponent(OnepluselevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
