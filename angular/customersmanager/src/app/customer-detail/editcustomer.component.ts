import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute,private dataService:DataService) {
    console.log('route',route);
  }
  rootFormGroup
  CustomerInfo;
  ngOnInit() {
    this.rootFormGroup = new FormGroup({
      firstName: new FormControl(this.CustomerInfo.firstName, Validators.required),
      lastName:new FormControl('',[Validators.required]),
      address: new FormControl(''),
      city:new FormControl(),
      state:new FormControl(),
      
    })
    console.log(this.rootFormGroup.get('firstName').value = 'ravi');
    // this.route.parent.params.pipe(map(p => p.id))
    this.route.parent.params.pipe(map(p => p.id)).subscribe((data) => {
      this.dataService.getCustomerDataById(data).subscribe((cust)=>{
        this.CustomerInfo = cust;
        console.log(this.CustomerInfo);
        //this.rootFormGroup.get('firstName').value = this.CustomerInfo.firstName;
        
      });

    });
   
  }
  leavePage(){
    this.router.navigate(['/customers/cardview/1/detail']);
  }
  submit(){
    this.route.parent.params.pipe(map(p => p.id)).subscribe((data) => {
      this.CustomerInfo.firstName = 'krishna';
      this.CustomerInfo.lastName ='radhe'
      this.dataService.updateCustomer(this.CustomerInfo).subscribe(()=>{
        this.router.navigate(['customers/cardview']);
      });
    });
  }
  delete(){
    this.route.parent.params.pipe(map(p => p.id)).subscribe((data)=>{
      this.dataService.deleteCustomer(data).subscribe(()=>{
        this.router.navigate(['customers/cardview']);
      })
    })
  }
}
