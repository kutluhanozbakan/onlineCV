import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgitimAdd1Component } from './egitim-add1.component';

describe('EgitimAdd1Component', () => {
  let component: EgitimAdd1Component;
  let fixture: ComponentFixture<EgitimAdd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgitimAdd1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgitimAdd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
