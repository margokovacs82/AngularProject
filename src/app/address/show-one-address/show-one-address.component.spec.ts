import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneAddressComponent } from './show-one-address.component';

describe('ShowOneAddressComponent', () => {
  let component: ShowOneAddressComponent;
  let fixture: ComponentFixture<ShowOneAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOneAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
