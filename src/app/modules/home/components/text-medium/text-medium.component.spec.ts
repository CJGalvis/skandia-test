import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMediumComponent } from './text-medium.component';

describe('TextMediumComponent', () => {
  let component: TextMediumComponent;
  let fixture: ComponentFixture<TextMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMediumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
