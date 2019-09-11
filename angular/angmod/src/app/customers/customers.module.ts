import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerDetailModule } from '../customer-detail/customer-detail.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerDetailModule
  ],
  declarations: [CustomersComponent],
  exports:[CustomersComponent]
})
export class CustomersModule { }
