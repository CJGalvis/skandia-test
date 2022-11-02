import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTopComponent } from './text-top.component';

describe('TextTopComponent', () => {
  let component: TextTopComponent;
  let fixture: ComponentFixture<TextTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
