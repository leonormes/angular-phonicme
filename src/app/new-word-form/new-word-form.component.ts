import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-word-form',
  templateUrl: './new-word-form.component.html',
  styleUrls: ['./new-word-form.component.css']
})
export class NewWordFormComponent implements OnInit {
  wordForm: FormGroup;
  word: AbstractControl;

  constructor(fb: FormBuilder) {
    this.wordForm = fb.group({
      'word': ['', Validators.required]
    });

    this.word = this.wordForm.controls['word']
  }

  ngOnInit() {
  }

  onSubmit(form: string): void {
    console.log('you submitted: ', form)
  }

}
