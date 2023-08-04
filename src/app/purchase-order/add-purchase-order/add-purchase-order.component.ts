import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';

@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.css']
})
export class AddPurchaseOrderComponent implements OnInit {

  purchaseOrderForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private purchaseOrderService: PurchaseOrderService,
    private router: Router
    ) {
    this.purchaseOrderForm = this.formbuilder.group({
      name: ['', Validators.required],
      products: this.formbuilder.array([this.formbuilder.group({
        name: ['', Validators.required],
        palletRows: [0, [Validators.required, Validators.min(1)]],
        palletCols: [0, [Validators.required, Validators.min(1)]],
        quantities: [0, [Validators.required, Validators.min(0)]]
      })])
    });

  }

  ngOnInit(): void {
  }

  get products() {
    return this.purchaseOrderForm.controls['products'] as FormArray;
  }

  addProduct() {
    let productFrom = this.formbuilder.group({
      name: ['', Validators.required],
      palletRows: [0, [Validators.required, Validators.min(1)]],
      palletCols: [0, [Validators.required, Validators.min(1)]],
      quantities: [0, [Validators.required, Validators.min(0)]]
    });
    (this.purchaseOrderForm.controls['products'] as FormArray).push(productFrom);
  }

  removeProduct(index:any) {
    (this.purchaseOrderForm.controls['products'] as FormArray).removeAt(index);
  }

  save() {
    if(this.purchaseOrderForm.invalid) return;

    this.purchaseOrderService.addPurchaseOrder(this.purchaseOrderForm.value).subscribe({
      complete: console.log
    });

    window.location.reload();
  }
}
