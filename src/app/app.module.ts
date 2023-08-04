import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AddPurchaseOrderComponent } from './purchase-order/add-purchase-order/add-purchase-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseOrderPipePipe } from './pipes/purchase-order-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PurchaseOrderComponent,
    AddPurchaseOrderComponent,
    PurchaseOrderPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
