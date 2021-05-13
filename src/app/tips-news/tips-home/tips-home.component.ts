import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/admin/admin-services/menu.service';

@Component({
  selector: 'app-tips-home',
  templateUrl: './tips-home.component.html',
  styleUrls: ['./tips-home.component.scss']
})
export class TipsHomeComponent implements OnInit {

  menuList: any;

  constructor(private menus: MenuService) { }

  ngOnInit(): void {
    this.menus.getMenus().subscribe(menus => {
      this.menuList = menus;
    })
  }

}
