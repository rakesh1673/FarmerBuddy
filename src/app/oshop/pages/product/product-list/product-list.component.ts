import { ToastrService } from './../../../shared/services/toastr.service';
import { ProductService } from './../../../shared/services/product.service';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/oshop/shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  loading = false;
  brands= ['All', 'Trust Basket', 'GoCoir', 'Bio Blooms', 'Green Wood'];

  selectedBrand: 'All';

  page = 1;
  constructor(
    public authService: AuthService,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {
    console.log(authService.isAdmin$)
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading = true;
    const x = this.productService.getProducts();
    x.snapshotChanges().subscribe(
      (product) => {
        this.loading = false;
        this.productList = [];
        product.forEach((element) => {
          const y = { ...element.payload.toJSON(), $key: element.key };
          this.productList.push(y as Product);
        });
      },
      (err) => {
        this.toastrService.error('Error while fetching Products', err);
      }
    );
  }

  removeProduct(key: string) {
    this.productService.deleteProduct(key);
  }

  addFavourite(product: Product) {
    this.productService.addFavouriteProduct(product);
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

}
