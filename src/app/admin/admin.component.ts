import { I18nServiceService } from './../i18n-service/i18n-service.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgxYazuoSidenavService, YazuoSidenavDirection, YazuoSidenavSettings } from 'ngx-yazuo-sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  links = [
    {
      name: 'Menus',
      link: 'menus'
    },
    {
      name: 'Posts',
      link: 'posts'
    }
  ]

  @ViewChild('content', {static: true}) content: TemplateRef<any>;

  constructor(private yazuoSidenav: NgxYazuoSidenavService, private translate: TranslateService, private i18nService: I18nServiceService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  settings: YazuoSidenavSettings = {
    bgColor:'#3F51B5', //default: '#eeeeee'
    width: 35, //default: 75
    animationTime: 0.5, //default: 0.5s
    position: YazuoSidenavDirection.Left, //default: YazuoSidenavDirection.Left
    bgBackDrop: 'rgba(0,0,0,0.5)', //default: rgba(0,0,0,0.2)
    backdrop: true, //default: true,
    clickOutside: true, //default: true
    btnClose: true //default: true
  };

  showSideNav(): void {
    this.yazuoSidenav.open(this.content, this.settings); //settings is optional
  }

  closeSideNav(): void {
    this.yazuoSidenav.close()
  }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale))
    this.translate.use('en');
  }

}
