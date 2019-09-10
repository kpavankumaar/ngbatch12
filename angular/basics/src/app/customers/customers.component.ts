import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  data= [
    {
      name:'Ravi',
    },
    {
      name:'Srikanth',
    },
    {
      name:'krishna'
    }
  ]
  constructor() { }

  ngOnInit() {
    
  }
  sharedDataFromChild(data){
    console.log('data', data);
  }
}
