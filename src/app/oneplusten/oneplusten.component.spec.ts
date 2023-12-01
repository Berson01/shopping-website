import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneplustenComponent } from './oneplusten.component';

describe('OneplustenComponent', () => {
  let component: OneplustenComponent;
  let fixture: ComponentFixture<OneplustenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneplustenComponent]
    });
    fixture = TestBed.createComponent(OneplustenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
