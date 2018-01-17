import { UserService } from './../../sevices/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phonic-scheme-item',
  templateUrl: './phonic-scheme-item.component.html',
  styleUrls: ['./phonic-scheme-item.component.css']
})
export class PhonicSchemeItemComponent implements OnInit {
  phonicSchemeId: any;
  @Input() phonicScheme: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    if(this.userService.phonicSchemeId) {
      console.log('ID SET!!')
    }
  }

  onSelectScheme(event) {
    this.userService.setPhonicScheme(event.target.id)
    console.log('scheme set to:' + this.userService.getPhonicSchemeId());
  }
}
