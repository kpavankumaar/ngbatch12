import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular Session';
  username:string;
  arr = ['red','green','blue'];
  @ViewChild('user') userElement:ElementRef;
  ngOnInit(){
    console.log(this.userElement.nativeElement.value);
  }
  color = 'grey';
  changeColor(){
    console.log("data");
  }
  updateUserDetails(e){
    this.username = e ;
  }
  changeInUserDetails(e){
    this.username = e;
  }
  detectChange(e){
    this.username = e;
    console.log(e)
  }
}
