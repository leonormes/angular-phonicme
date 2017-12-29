import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicComponent } from './phonic.component';

describe('PhonicComponent', () => {
  let component: PhonicComponent;
  let fixture: ComponentFixture<PhonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
