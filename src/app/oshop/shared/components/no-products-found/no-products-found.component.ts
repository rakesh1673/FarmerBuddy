import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-products-found',
  templateUrl: './no-products-found.component.html',
  styleUrls: ['./no-products-found.component.scss']
})
export class NoProductsFoundComponent implements OnInit {
  @Input('title') title: string;
  @Input('description') description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
