import { ProductService } from './../../../../shared/services/product.service';
import { ShippingService } from './../../../../shared/services/shipping.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/oshop/shared/models/product';
import { User, UserDetail } from 'src/app/oshop/shared/models/user';
import { AuthService } from 'src/app/oshop/shared/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
  userDetails: User = new User();

  userDetail: UserDetail = new UserDetail();

  products: Product[];

  constructor(
    private authService: AuthService,
    private shippingService: ShippingService,
    private productService: ProductService,
    private router: Router
  ) {
    document.getElementById('productsTab').style.display = 'none';
    document.getElementById('shippingTab').style.display = 'block';
    document.getElementById('billingTab').style.display = 'block';
    document.getElementById('resultTab').style.display = 'none';

    this.products = this.productService.getLocalCartProducts();
    this.authService.user$.pipe(
      map((user) => {
        console.log({ user });
        this.userDetails = user;
      })
    )
  }

  ngOnInit(): void {
  }

  updateUserDetails(form: NgForm) {
    const products = [];
    let totalPrice = 0;
    this.products.forEach((product) => {
      delete product.$key;
      totalPrice += +product.productPrice;
      products.push(product);
    });
    const data = {
      ...form.value,
      emailId: this.userDetails.emailId,
      // userId: this.userDetails.$key,
      products,
      totalPrice,
      shippingDate: Date.now(),
    };

    console.log({data});

    this.shippingService.createShippings(data);

    this.router.navigate(['/oshop/products/checkout', 'billing-details']);
  }


}
