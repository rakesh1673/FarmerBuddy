import { trigger, transition, useAnimation } from '@angular/animations';
import { I18nServiceService } from './../i18n-service/i18n-service.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../oshop/shared/models/user';
import { AuthService } from '../oshop/shared/services/auth.service';
import { bounce, bounceInLeft, bounceInRight, rubberBand, zoomInDown } from 'ngx-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(rubberBand))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight))])
  ]
})
export class HomeComponent implements OnInit {
  bounceInRight: any;
  bounce: any;
  bounceInLeft: any;
  user: User;
  color: string;
  isAdmin;

  languageList = [
    { language: "English", langCode: "en" },
    { language: "Hindi", langCode: "hin" },
    { language: "Telugu", langCode: "te" },
    { language: "Tamil", langCode: "ta" },
  ];

  constructor(public authService: AuthService, private translate: TranslateService) {

    translate.addLangs(['en', 'te', 'hin','ta']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|te|hin|ta/) ? browserLang : 'en');
  }

  changeLocale(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
  }

}
