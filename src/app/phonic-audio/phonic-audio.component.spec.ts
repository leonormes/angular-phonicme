import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonicAudioComponent } from './phonic-audio.component';

describe('PhonicAudioComponent', () => {
  let component: PhonicAudioComponent;
  let fixture: ComponentFixture<PhonicAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonicAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonicAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
