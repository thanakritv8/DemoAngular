import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  user: any;
  constructor(private router: Router) { }

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

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
