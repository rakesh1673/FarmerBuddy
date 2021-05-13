import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/oshop/shared/models/product';
import { ProductService } from 'src/app/oshop/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  checkoutProducts: Product[];
  totalPrice = 0;

  constructor(private productService: ProductService) {
    document.getElementById('shippingTab').style.display = 'none';
    document.getElementById('billingTab').style.display = 'none';
    document.getElementById('resultTab').style.display = 'none';

    const products = this.productService.getLocalCartProducts();

    this.checkoutProducts = products;

    products.forEach((product) => {
      this.totalPrice += +product.productPrice;
    });
  }

  ngOnInit(): void {
  }

}
