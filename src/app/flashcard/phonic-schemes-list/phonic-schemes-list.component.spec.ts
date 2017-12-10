import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicSchemesListComponent } from './phonic-schemes-list.component';

describe('PhonicSchemesListComponent', () => {
  let component: PhonicSchemesListComponent;
  let fixture: ComponentFixture<PhonicSchemesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicSchemesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicSchemesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
