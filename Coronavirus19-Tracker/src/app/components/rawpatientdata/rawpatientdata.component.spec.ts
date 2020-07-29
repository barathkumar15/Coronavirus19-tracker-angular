import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawpatientdataComponent } from './rawpatientdata.component';

describe('RawpatientdataComponent', () => {
  let component: RawpatientdataComponent;
  let fixture: ComponentFixture<RawpatientdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawpatientdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawpatientdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
