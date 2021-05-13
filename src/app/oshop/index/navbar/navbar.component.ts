import { ProductService } from './../../shared/services/product.service';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  languageList = [
    { language: "English", langCode: "en" },
    { language: "French", langCode: "fr" },
    { language: "Persian", langCode: "fa" },
    { language: "Japanese", langCode: "ja" },
    { language: "Hindi", langCode: "hin" },
  ];

  constructor(
    public authService: AuthService,
    private router: Router,
    public productService: ProductService,
  ) {

  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  setLang(lang: string) {
  }


}
