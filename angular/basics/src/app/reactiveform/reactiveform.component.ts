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
      notifymethod: new FormControl('phone'),
      email:new FormControl(),
      phone:new FormControl(),
      address: new FormGroup({
        city: new FormControl('',Validators.required),
        state:new FormControl('',Validators.required)
      })
    })
    
  }
  notificationProcess(){
    let chooseNotificationMethod = this.rootFormGroup.get('notifymethod');
    var phone = this.rootFormGroup.get('phone');
    var emailCtrl = this.rootFormGroup.get('email');
    setTimeout(()=>{
      
      console.log('chooseNotificationMethod',chooseNotificationMethod);  
      if(chooseNotificationMethod.value === 'phone'){
        phone.setValidators(Validators.required);
        emailCtrl.clearValidators();
      }else{
        console.log('email form control', emailCtrl);
        emailCtrl.setValidators([Validators.required]);
        phone.clearValidators();
      }
  
      phone.updateValueAndValidity();
      emailCtrl.updateValueAndValidity();
    },0);
    console.log('chooseNotificationMethod',chooseNotificationMethod.value);
    
  }
}
