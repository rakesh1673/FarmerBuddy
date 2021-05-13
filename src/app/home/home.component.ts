import { I18nServiceService } from './../i18n-service/i18n-service.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../oshop/shared/models/user';
import { AuthService } from '../oshop/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  color: string;

  languageList = [
    { language: "English", langCode: "en" },
    { language: "Hindi", langCode: "hin" },
    { language: "Telugu", langCode: "te" },
  ];

  constructor(public authService: AuthService,) {
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
  }

}
