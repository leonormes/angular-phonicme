import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardHomeComponent } from './flashcard-home.component';

describe('FlashcardHomeComponent', () => {
  let component: FlashcardHomeComponent;
  let fixture: ComponentFixture<FlashcardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
