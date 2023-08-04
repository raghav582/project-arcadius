import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { add_purchase_order, base_url, get_purchase_orders } from '../apis/app.urls';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(private http: HttpClient) { }

  getPurchaseOrders() {
    return this.http.get(base_url + get_purchase_orders);
  }

  addPurchaseOrder(purchaseOrder: any) {
    return this.http.post(base_url + add_purchase_order, purchaseOrder);
  }
}
