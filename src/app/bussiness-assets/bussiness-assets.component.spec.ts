import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessAssetsComponent } from './bussiness-assets.component';

describe('BussinessAssetsComponent', () => {
  let component: BussinessAssetsComponent;
  let fixture: ComponentFixture<BussinessAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
