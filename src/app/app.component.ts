import { I18nServiceService } from './i18n-service/i18n-service.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { bounce, zoomInLeft } from 'ngx-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('bounce', [transition('* => *', useAnimation(zoomInLeft, {
  //     params: { timing: 4, delay: 1}
  //   }))])
  // ],
})
export class AppComponent {
  param = {value: 'World'};

  bounce: any;
  title = 'FarmerBuddy';

  constructor(public  translate: TranslateService) {
    translate.addLangs(['en', 'te', 'hin']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|te|hin/) ? browserLang : 'en');
  }


}
