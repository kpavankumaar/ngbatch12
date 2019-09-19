import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'customers', loadChildren:"./customers/customers.module#CustomersModule"},
  {path:'customers/cardview/:id', loadChildren:"./customer-detail/customer-detail.module#CustomerDetailModule"},
  {path:'customers/listview/:id', redirectTo:'customers/cardview/:id', pathMatch:'full'},
  {path:'',redirectTo:'customers', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
