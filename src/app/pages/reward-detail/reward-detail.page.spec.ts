import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardDetailPage } from './reward-detail.page';

describe('RewardDetailPage', () => {
  let component: RewardDetailPage;
  let fixture: ComponentFixture<RewardDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
