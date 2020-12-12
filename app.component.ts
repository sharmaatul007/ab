import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms"
import {RxwebValidators } from "@rxweb/reactive-form-validators"

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  userFormGroup:FormGroup;
  creditCardTypes = [
    "Visa",

    "AmericanExpress",

    "Maestro",

    "JCB",

    "Discover",

    "DinersClub",

    "MasterCard"
]
  constructor(private formBuilder:FormBuilder){}


  ngOnInit(){
    this.userFormGroup = this.formBuilder.group({
      cardType:['Visa'],
      creditCard:['',RxwebValidators.creditCard ({fieldName:'cardType'})]
    })
  }
}
