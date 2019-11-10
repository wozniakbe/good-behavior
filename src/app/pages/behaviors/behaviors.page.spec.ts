import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsPage } from './behaviors.page';

describe('BehaviorsPage', () => {
  let component: BehaviorsPage;
  let fixture: ComponentFixture<BehaviorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
