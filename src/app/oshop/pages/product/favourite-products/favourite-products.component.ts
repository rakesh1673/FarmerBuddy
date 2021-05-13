import { ProductService } from './../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/oshop/shared/models/product';

@Component({
  selector: 'app-favourite-products',
  templateUrl: './favourite-products.component.html',
  styleUrls: ['./favourite-products.component.scss']
})
export class FavouriteProductsComponent implements OnInit {
  favouriteProducts: Product[];
  showDataNotFound = true;

  // Not Found Message
  messageTitle = 'No Favourite Products Found';
  messageDescription = 'Please, choose your favourite products';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getFavouriteProduct();
  }

  removeFavourite(product: Product) {
    this.productService.removeLocalFavourite(product);
    this.getFavouriteProduct();
  }

  getFavouriteProduct() {
    this.favouriteProducts = this.productService.getLocalFavouriteProducts();
  }

}
