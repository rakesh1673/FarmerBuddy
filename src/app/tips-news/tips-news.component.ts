import { MenuService } from './../admin/admin-services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-news',
  templateUrl: './tips-news.component.html',
  styleUrls: ['./tips-news.component.scss']
})
export class TipsNewsComponent implements OnInit {
  menuList: any;

  constructor(private menus: MenuService) { }

  ngOnInit(): void {
    this.menus.getMenus().subscribe(menus => {
      this.menuList = menus;
    })
  }

}
