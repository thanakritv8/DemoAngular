import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ParaService } from '../../services/para.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  menus: any;
  txtSearch: any;
  constructor(private para: ParaService) { }

  ngOnInit() {
    this.menus = [
      {
        "menuId": 1,
        "menuName": "Header Menu A",
        "icon": null,
        "route": null,
        "parentId": null,
        "seq": 100,
        "menuInRole": null,
      },
      {
        "menuId": 2,
        "menuName": "Menu 1",
        "icon": "metismenu-icon fas fa-user-alt",
        "route": "/home",
        "parentId": 3,
        "seq": 101
      },
      {
        "menuId": 3,
        "menuName": "Menu 2",
        "icon": "metismenu-icon fas fa-store",
        "route": "/menu2",
        "parentId": 3,
        "seq": 102
      },
      {
        "menuId": 4,
        "menuName": "Header Menu B",
        "icon": null,
        "route": null,
        "parentId": null,
        "seq": 200
      },
      {
        "menuId": 5,
        "menuName": "Menu 1",
        "icon": "metismenu-icon fas fa-user-alt",
        "route": "/menu3",
        "parentId": 3,
        "seq": 201,
      },
      {
        "menuId": 6,
        "menuName": "Menu 2",
        "icon": "metismenu-icon fas fa-store",
        "route": "/menu4",
        "parentId": 3,
        "seq": 202,
      }
    ];
  }

  onBtnClick() {
    this.para.txtSearch = {
      'textSearch': this.txtSearch
    };
  }

}
