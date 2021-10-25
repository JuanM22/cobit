import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCompoComponent } from './report-compo.component';

describe('ReportCompoComponent', () => {
  let component: ReportCompoComponent;
  let fixture: ComponentFixture<ReportCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
