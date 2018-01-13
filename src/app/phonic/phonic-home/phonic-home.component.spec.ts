import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicHomeComponent } from './phonic-home.component';

describe('PhonicHomeComponent', () => {
  let component: PhonicHomeComponent;
  let fixture: ComponentFixture<PhonicHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
