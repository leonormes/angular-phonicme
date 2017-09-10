import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicsListComponent } from './phonics-list.component';

describe('PhonicsListComponent', () => {
  let component: PhonicsListComponent;
  let fixture: ComponentFixture<PhonicsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
