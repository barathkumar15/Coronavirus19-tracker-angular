import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBedsComponent } from './hospital-beds.component';

describe('HospitalBedsComponent', () => {
  let component: HospitalBedsComponent;
  let fixture: ComponentFixture<HospitalBedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalBedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
