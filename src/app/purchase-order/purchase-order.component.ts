import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { error } from 'console';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  purchaseOrderList: any = null;
  searchData: any = "";

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.purchaseOrderService.getPurchaseOrders().subscribe({
      next: (response) => {
        this.purchaseOrderList = response;
        console.log(response)
      },
      error: (error) => {
        console.log(error);
        this.purchaseOrderList = [];
      }
    })
  }

}
