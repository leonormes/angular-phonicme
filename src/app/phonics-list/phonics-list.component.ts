import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Phonic} from '../phonic.model';

@Component({
  selector: 'phonics-list',
  templateUrl: './phonics-list.component.html',
  styleUrls: ['./phonics-list.component.css']
})

export class PhonicsListComponent implements OnInit {
  @Input() phonicList: Phonic[];
  @Output() onPhonicSelected: EventEmitter<Phonic>;

  private currentPhonic: Phonic;

  constructor() {
    this.onPhonicSelected = new EventEmitter();
  }

  clicked(phonic: Phonic): void {
    this.currentPhonic = phonic;
    this.onPhonicSelected.emit(phonic);
  }

  isSelected(phonic: Phonic): boolean {
    if(!phonic || !this.currentPhonic) {
      return false;
    }
    return phonic.word === this.currentPhonic.word;
  }

  ngOnInit() {
  }

}
