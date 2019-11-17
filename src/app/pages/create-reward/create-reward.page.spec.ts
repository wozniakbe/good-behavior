import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRewardPage } from './create-reward.page';

describe('CreateRewardPage', () => {
  let component: CreateRewardPage;
  let fixture: ComponentFixture<CreateRewardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRewardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRewardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
