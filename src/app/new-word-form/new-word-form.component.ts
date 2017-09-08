import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-word-form',
  templateUrl: './new-word-form.component.html',
  styleUrls: ['./new-word-form.component.css']
})
export class NewWordFormComponent implements OnInit {
  addWord(
    word: HTMLInputElement,
    file: HTMLInputElement,
    meta: HTMLInputElement): boolean {
    console.log(`Adding word: ${word.value} & ${file.value} & ${meta.value}`);
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
