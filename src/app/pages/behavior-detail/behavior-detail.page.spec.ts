import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorDetailPage } from './behavior-detail.page';

describe('BehaviorDetailPage', () => {
  let component: BehaviorDetailPage;
  let fixture: ComponentFixture<BehaviorDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
