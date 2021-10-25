import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainsCompoComponent } from './domains-compo.component';

describe('DomainsCompoComponent', () => {
  let component: DomainsCompoComponent;
  let fixture: ComponentFixture<DomainsCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainsCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
