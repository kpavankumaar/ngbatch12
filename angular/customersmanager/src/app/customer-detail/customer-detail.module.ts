import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerOrderComponent } from './customer-order.component';
import { EditcustomerComponent } from './editcustomer.component';
import { CanActivateGaurd } from './canactivategaurd';
import { CanDeactivateGaurd } from './candeactivategaurd';


@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent, CustomerOrderComponent, EditcustomerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerDetailRoutingModule,
    
  ],
  providers:[CanActivateGaurd,CanDeactivateGaurd]
})
export class CustomerDetailModule { }
