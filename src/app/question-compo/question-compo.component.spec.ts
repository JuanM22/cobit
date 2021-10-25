import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCompoComponent } from './question-compo.component';

describe('QuestionCompoComponent', () => {
  let component: QuestionCompoComponent;
  let fixture: ComponentFixture<QuestionCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
