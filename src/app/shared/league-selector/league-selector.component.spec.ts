import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSelectorComponent } from './league-selector.component';

describe('LeagueSelectorComponent', () => {
  let component: LeagueSelectorComponent;
  let fixture: ComponentFixture<LeagueSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueSelectorComponent]
    });
    fixture = TestBed.createComponent(LeagueSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
