import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/oshop/shared/services/product.service';
import { BillingService } from './../../../../shared/services/billing.service';
import { AuthService } from 'src/app/oshop/shared/services/auth.service';
import { Product } from 'src/app/oshop/shared/models/product';
import { User, UserDetail } from 'src/app/oshop/shared/models/user';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {
  userDetails: User = new User();
  products: Product[];
  userDetail: UserDetail = new UserDetail();

  constructor(
    private authService: AuthService,
    private billingService: BillingService,
    private productService: ProductService,
    private router: Router
  ) {
    document.getElementById('productsTab').style.display = 'none';
    document.getElementById('shippingTab').style.display = 'none';
    document.getElementById('billingTab').style.display = 'block';
    document.getElementById('resultTab').style.display = 'none';

    this.products = this.productService.getLocalCartProducts();
    this.authService.user$.pipe(
      map((user) => {
        this.userDetails = user;
      })
    );
  }

  ngOnInit(): void {
  }

  updateUserDetails(form: NgForm) {
    let totalPrice = 0;
    const products = [];
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
      billingDate: Date.now(),
    };
    console.log({ data });

    this.billingService.createBillings(data);

    this.router.navigate(['/oshop/products/checkout', 'result']);
  }

}
