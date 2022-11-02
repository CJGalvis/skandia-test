import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExplorarComponent } from './card-explorar.component';

describe('CardExplorarComponent', () => {
  let component: CardExplorarComponent;
  let fixture: ComponentFixture<CardExplorarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExplorarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExplorarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
