import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicCardSetsComponent } from './phonic-card-sets.component';

describe('PhonicCardSetsComponent', () => {
  let component: PhonicCardSetsComponent;
  let fixture: ComponentFixture<PhonicCardSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicCardSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicCardSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
