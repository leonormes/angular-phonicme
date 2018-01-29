import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicCardComponent } from './phonic-card.component';

describe('PhonicCardComponent', () => {
  let component: PhonicCardComponent;
  let fixture: ComponentFixture<PhonicCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
