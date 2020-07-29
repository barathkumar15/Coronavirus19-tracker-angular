import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingStatsComponent } from './testing-stats.component';

describe('TestingStatsComponent', () => {
  let component: TestingStatsComponent;
  let fixture: ComponentFixture<TestingStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
