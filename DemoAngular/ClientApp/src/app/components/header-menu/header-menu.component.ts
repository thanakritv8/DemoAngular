import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  user: any;
  constructor() { }

  ngOnInit() {
    this.user = {
      "userId": "42fddcbe-60a7-4f7e-a619-59b5afd81eb3",
      "username": "admin",
      "firstName": "tanakrit",
      "lastName": "jinakhan",
      "email": "",
      "tel": "",
      "pathImg": null
    };
  }

}
