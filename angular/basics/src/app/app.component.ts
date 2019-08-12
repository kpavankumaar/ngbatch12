import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular Session';
  @ViewChild('user') userElement:ElementRef;
  ngOnInit(){
    console.log(this.userElement.nativeElement.value)
  }
  color = 'grey';
}
