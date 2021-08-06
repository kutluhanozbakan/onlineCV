import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgitimAdd2Component } from './egitim-add2.component';

describe('EgitimAdd2Component', () => {
  let component: EgitimAdd2Component;
  let fixture: ComponentFixture<EgitimAdd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgitimAdd2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgitimAdd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
