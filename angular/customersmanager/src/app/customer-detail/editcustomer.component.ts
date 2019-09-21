import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dataService:DataService) {
    console.log('route',route);
  }
  rootFormGroup
  CustomerInfo;
  ngOnInit() {
    // this.route.parent.params.pipe(map(p => p.id))
    this.route.parent.params.pipe(map(p => p.id)).subscribe((data) => {
      this.dataService.getCustomerDataById(data).subscribe((cust)=>{
        this.CustomerInfo = cust;
        console.log(this.CustomerInfo);
        
        this.rootFormGroup = new FormGroup({
          firstName: new FormControl(this.CustomerInfo.firstName, Validators.required),
          lastName:new FormControl('',[Validators.required]),
          address: new FormControl(''),
          city:new FormControl(),
          state:new FormControl(),
          
        })
      });

    });
   
  }

}
