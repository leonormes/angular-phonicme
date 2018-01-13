import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-word-form',
  templateUrl: './new-word-form.component.html',
  styleUrls: ['./new-word-form.component.css']
})
export class NewWordFormComponent implements OnInit {
  wordForm: FormGroup;
  word: AbstractControl;
  file: AbstractControl;
  meta: AbstractControl;

  constructor(fb: FormBuilder) {
    this.wordForm = fb.group({
      'word': ['', Validators.required],
      'file': ['', Validators.required],
      'meta': ['', Validators.required]
    });

    this.word = this.wordForm.controls['word']
    this.file = this.wordForm.controls['file']
    this.meta = this.wordForm.controls['meta']
  }

  ngOnInit() {
  }

  onSubmit(form: string): void {
    console.log('you submitted: ', form)
    this.wordForm.reset();
  }

}
