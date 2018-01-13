import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicSchemeItemComponent } from './phonic-scheme-item.component';

describe('PhonicSchemeItemComponent', () => {
  let component: PhonicSchemeItemComponent;
  let fixture: ComponentFixture<PhonicSchemeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicSchemeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicSchemeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
