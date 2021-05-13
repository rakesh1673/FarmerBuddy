import { MenuService } from './../../admin/admin-services/menu.service';
import { User } from './../../oshop/shared/models/user';
import { AuthService } from 'src/app/oshop/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-navbar',
  templateUrl: './tips-navbar.component.html',
  styleUrls: ['./tips-navbar.component.scss']
})
export class TipsNavbarComponent implements OnInit {
  user: User;
  menuList: any;

  languageList = [
    { language: "English", langCode: "en" },
    { language: "French", langCode: "fr" },
    { language: "Persian", langCode: "fa" },
    { language: "Japanese", langCode: "ja" },
    { language: "Hindi", langCode: "hin" },
  ];

  constructor(
    public authService: AuthService,
    private menus: MenuService
  ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.user = user);
    console.log(this.user);
    this.menus.getMenus().subscribe(menus => {
      this.menuList = menus;
    })
  }

  logout() {
    this.authService.logout();
  }

}
