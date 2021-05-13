import { Billing } from './../models/billing';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  shippings: AngularFireList<Billing>;
  shipping: AngularFireObject<Billing>;

  constructor(private db: AngularFireDatabase) {
    this.getShippings();
  }

  createShippings(data: Billing) {
    this.shippings.push(data);
  }

  getShippings() {
    this.shippings = this.db.list('shippings');
    return this.shippings;
  }

  getShippingById(key: string) {
    this.shipping = this.db.object('products/' + key);
    return this.shipping;
  }

  updateShipping(data: Billing) {
    this.shippings.update(data.$key, data);
  }

  deleteShipping(key: string) {
    this.shippings.remove(key);
  }
}
