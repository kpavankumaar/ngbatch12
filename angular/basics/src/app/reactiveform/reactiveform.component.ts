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
      phone:new FormControl()
    })
    
  }
  notificationProcess(){
    let chooseNotificationMethod = this.rootFormGroup.get('notifymethod');
    
    setTimeout(()=>{
      let phone = this.rootFormGroup.get('phone');
      let emailCtrl = this.rootFormGroup.get('email');
      console.log('chooseNotificationMethod',chooseNotificationMethod);  
      if(chooseNotificationMethod.value === 'phone'){
        phone.setValidator(['Validators.required']);
        emailCtrl.clearValidator();
      }else{
        console.log('email form control', emailCtrl);
        emailCtrl.setValidator(['Validators.required']);
        phone.clearValidator();
      }
  
      phone.updateValueAndValidity();
      emailCtrl.updateValueAndValidity();
    },1);
    console.log('chooseNotificationMethod',chooseNotificationMethod.value);
    
  }
}
