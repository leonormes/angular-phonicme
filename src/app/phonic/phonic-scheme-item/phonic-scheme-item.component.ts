import { Component, Input, OnInit } from '@angular/core';

import { UserService } from './../../sevices/user.service';

@Component({
  selector: 'app-phonic-scheme-item',
  templateUrl: './phonic-scheme-item.component.html',
  styleUrls: ['./phonic-scheme-item.component.css']
})
export class PhonicSchemeItemComponent implements OnInit {
  @Input() phonicScheme: any;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onSelectScheme(event) {
    this.userService.setPhonicScheme(event.target.id);
    console.log('scheme set to:' + this.userService.getPhonicSchemeId());
  }
}
