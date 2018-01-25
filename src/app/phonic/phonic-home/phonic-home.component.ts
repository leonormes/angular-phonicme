import { Component, OnInit } from '@angular/core';

import { UserService } from './../../sevices/user.service';
@Component({
  selector: 'app-phonic-home',
  templateUrl: './phonic-home.component.html',
  styleUrls: ['./phonic-home.component.css']
})
export class PhonicHomeComponent implements OnInit {
  phonicSchemeId: any;
  constructor(private userService: UserService) {
    this.phonicSchemeId = userService.getPhonicSchemeId();
  }

  ngOnInit() {}
}
