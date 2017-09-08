import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicListComponent } from './phonic-list.component';

describe('PhonicListComponent', () => {
  let component: PhonicListComponent;
  let fixture: ComponentFixture<PhonicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
