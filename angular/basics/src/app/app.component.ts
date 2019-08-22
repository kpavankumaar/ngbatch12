import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular Session';
  username;
  @ViewChild('user') userElement:ElementRef;
  ngOnInit(){
    console.log(this.userElement.nativeElement.value)
  }
  color = 'grey';
  changeColor(e){
    
    this.color = this.color == "green" ? "grey" : "green";
    
    console.log('change color', this.color, e);
  }
  updateUsername(e){
    console.log('update username ',e);
    this.username = e;
  }
}
