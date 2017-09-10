import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicMetaComponent } from './phonic-meta.component';

describe('PhonicMetaComponent', () => {
  let component: PhonicMetaComponent;
  let fixture: ComponentFixture<PhonicMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
