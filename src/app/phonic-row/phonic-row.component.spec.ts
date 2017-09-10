import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicRowComponent } from './phonic-row.component';

describe('PhonicRowComponent', () => {
  let component: PhonicRowComponent;
  let fixture: ComponentFixture<PhonicRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
