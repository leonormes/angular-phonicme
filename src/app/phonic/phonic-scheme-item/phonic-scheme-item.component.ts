import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../sevices/user.service';

@Component({
  selector: 'app-phonic-scheme-item',
  templateUrl: './phonic-scheme-item.component.html',
  styleUrls: ['./phonic-scheme-item.component.css']
})
export class PhonicSchemeItemComponent implements OnInit {
  @Input() phonicScheme: any;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  onSelectScheme(uuid) {
    this.userService.setPhonicScheme(uuid);
    this.router.navigate(['cardSets', this.userService.getPhonicSchemeId()]);
  }
}
