import { Input, Component, OnInit, HostBinding } from '@angular/core';
import { Word } from '../word.model';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() word: Word;
  constructor() {}

  ngOnInit() {}
}
