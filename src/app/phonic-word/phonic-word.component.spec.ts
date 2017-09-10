import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicWordComponent } from './phonic-word.component';

describe('PhonicWordComponent', () => {
  let component: PhonicWordComponent;
  let fixture: ComponentFixture<PhonicWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
