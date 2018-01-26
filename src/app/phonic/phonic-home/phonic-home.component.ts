import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/';

import { UserService } from './../../sevices/user.service';

@Component({
  selector: 'app-phonic-home',
  templateUrl: './phonic-home.component.html',
  styleUrls: ['./phonic-home.component.css']
})
export class PhonicHomeComponent implements OnInit {
  phonicSchemeId: any;
  constructor(private userService: UserService, private router: Router) {
    this.phonicSchemeId = userService.getPhonicSchemeId();
  }

  ngOnInit() {
    if (this.phonicSchemeId) {
      this.router.navigate(['cardSets', this.phonicSchemeId]);
    } else {
      this.router.navigate(['schemeChoice']);
    }
  }
}
