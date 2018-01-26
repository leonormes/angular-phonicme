import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicCardSetItemComponent } from './phonic-card-set-item.component';

describe('PhonicCardSetItemComponent', () => {
  let component: PhonicCardSetItemComponent;
  let fixture: ComponentFixture<PhonicCardSetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicCardSetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicCardSetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
