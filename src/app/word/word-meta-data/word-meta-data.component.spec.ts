import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordMetaDataComponent } from './word-meta-data.component';

describe('WordMetaDataComponent', () => {
  let component: WordMetaDataComponent;
  let fixture: ComponentFixture<WordMetaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordMetaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
