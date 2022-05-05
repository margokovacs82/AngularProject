import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressGoalComponent } from './address-goal.component';

describe('AddressGoalComponent', () => {
  let component: AddressGoalComponent;
  let fixture: ComponentFixture<AddressGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
