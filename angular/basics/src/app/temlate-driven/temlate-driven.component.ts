import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temlate-driven',
  templateUrl: './temlate-driven.component.html',
  styleUrls: ['./temlate-driven.component.css']
})
export class TemlateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  formDetails(d){
    console.log(d);
  }
}
