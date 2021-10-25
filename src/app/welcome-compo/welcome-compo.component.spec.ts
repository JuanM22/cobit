import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCompoComponent } from './welcome-compo.component';

describe('WelcomeCompoComponent', () => {
  let component: WelcomeCompoComponent;
  let fixture: ComponentFixture<WelcomeCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
