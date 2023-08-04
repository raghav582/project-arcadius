import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purchaseOrderPipe'
})
export class PurchaseOrderPipePipe implements PipeTransform {

  transform(purchaseOrders: any, args: String): any {
    if(purchaseOrders == null) {
      return;
    }
    return purchaseOrders.filter((order: any) => {
      return order["name"].includes(args) 
      || order["name"].toLowerCase().includes(args.toLowerCase()) 
      || order["name"].toUpperCase().includes(args.toUpperCase())
      || args === "";
    });
  }

}
