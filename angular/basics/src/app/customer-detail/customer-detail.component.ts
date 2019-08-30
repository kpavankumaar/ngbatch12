import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customerData;
  @Output() shareData: EventEmitter<number[]> = new EventEmitter();
  content = [1,2,3,4];
  sendData(){
    this.shareData.emit(this.content);
  }

  constructor() { 
    
  }


  ngOnInit() {
    console.log(this.customerData)
  }

}
