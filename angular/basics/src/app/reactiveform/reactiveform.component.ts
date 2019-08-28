import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
function ratingValidation(a,b){
  return function (control:AbstractControl):null | {[key:string]:boolean}{
    console.log(control.value)
    if(control.value < a || control.value > b){
      return {
        check:true
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
  rootFormGroup;
  ngOnInit() {
    this.rootFormGroup = new FormGroup({
      name: new FormControl('krishna',Validators.required),
      rating:new FormControl('',[Validators.required,ratingValidation(1,10)]),
    })
  }

}
