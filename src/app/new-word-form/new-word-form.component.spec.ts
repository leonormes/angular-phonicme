import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWordFormComponent } from './new-word-form.component';

describe('NewWordFormComponent', () => {
  let component: NewWordFormComponent;
  let fixture: ComponentFixture<NewWordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
