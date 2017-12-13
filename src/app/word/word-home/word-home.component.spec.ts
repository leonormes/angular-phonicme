import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordHomeComponent } from './word-home.component';

describe('WordHomeComponent', () => {
  let component: WordHomeComponent;
  let fixture: ComponentFixture<WordHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
