import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addWord(word: HTMLInputElement, file: HTMLInputElement): boolean {
    console.log(`Adding word: ${word.value} & ${file.value}`);
    return false;
  }
}
