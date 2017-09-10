import { Input, Component, OnInit } from '@angular/core';
import { Phonic } from "../phonic.model";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-new-word-form',
  templateUrl: './new-word-form.component.html',
  styleUrls: ['./new-word-form.component.css']
})
export class NewWordFormComponent implements OnInit {
    @Input() phonic: Phonic;

  constructor() { }

  ngOnInit() {
  }

}
