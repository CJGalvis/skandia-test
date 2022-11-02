import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReviewTargetComponent } from './card-review-target.component';

describe('CardReviewTargetComponent', () => {
  let component: CardReviewTargetComponent;
  let fixture: ComponentFixture<CardReviewTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReviewTargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReviewTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
