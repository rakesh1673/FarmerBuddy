import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/oshop/shared/models/user';
import { AuthService } from 'src/app/oshop/shared/services/auth.service';
import { ProductService } from 'src/app/oshop/shared/services/product.service';

@Component({
  selector: 'app-crop-navbar',
  templateUrl: './crop-navbar.component.html',
  styleUrls: ['./crop-navbar.component.scss']
})
export class CropNavbarComponent implements OnInit {

  user: User;

  languageList = [
    { language: "English", langCode: "en" },
    { language: "French", langCode: "fr" },
    { language: "Persian", langCode: "fa" },
    { language: "Japanese", langCode: "ja" },
    { language: "Hindi", langCode: "hin" },
  ];

  constructor(
    public authService: AuthService,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.user = user);
    console.log(this.user);
  }

  logout() {
    this.authService.logout();
  }

}
