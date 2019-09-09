import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { TemlateDrivenComponent } from './temlate-driven/temlate-driven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

// const route:Routes = [
//   {path:"customers",component:CustomersComponent},
//   {path:"detail",component:CustomerDetailComponent},
// ]
const route:Routes = [
  { 
    path:"customers",
    component:CustomersComponent,
    children:[
      {path:'detail', component:CustomerDetailComponent}
    ]
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    TemlateDrivenComponent,
    ReactiveformComponent,
    CustomersComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
