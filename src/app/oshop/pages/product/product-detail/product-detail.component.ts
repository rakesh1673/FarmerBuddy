import { ToastrService } from './../../../shared/services/toastr.service';
import { ProductService } from './../../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/oshop/shared/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const id = params.id;
      this.getProductDetail(id);
    });
  }

  getProductDetail(id: string) {
    const x = this.productService.getProductById(id);
    x.snapshotChanges().subscribe(
      (product) => {
        const y = { ...(product.payload.toJSON() as Product), $key: id };
        this.product = y;
      },
      (error) => {
        this.toastrService.error('Error while fetching Product Detail', error);
      }
    );
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
