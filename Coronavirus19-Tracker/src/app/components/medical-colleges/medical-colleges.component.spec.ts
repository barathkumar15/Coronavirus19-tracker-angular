import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCollegesComponent } from './medical-colleges.component';

describe('MedicalCollegesComponent', () => {
  let component: MedicalCollegesComponent;
  let fixture: ComponentFixture<MedicalCollegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCollegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
