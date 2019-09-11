import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './customer-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerDetailComponent],
  exports:[CustomerDetailComponent]
})
export class CustomerDetailModule { }
