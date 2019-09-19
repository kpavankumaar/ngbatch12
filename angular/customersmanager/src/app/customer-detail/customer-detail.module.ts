import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerOrderComponent } from './customer-order.component';


@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent, CustomerOrderComponent],
  imports: [
    CommonModule,
    CustomerDetailRoutingModule
  ]
})
export class CustomerDetailModule { }
