import { fadeAnimation } from './shared/animations/fadeInRoute';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-oshop',
  templateUrl: './oshop.component.html',
  styleUrls: ['./oshop.component.scss'],
  animations: [fadeAnimation]
})
export class OshopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.banner').owlCarousel({
      autoHeight: true,
      center: true,
      nav: true,
      items: 1,
      margin: 30,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  }

}
