import { Component } from '@angular/core';

@Component({
  selector: 'app-derivative',
  templateUrl: './derivative.component.html',
  styleUrl: './derivative.component.css'
})
export class DerivativeComponent {
  flag:boolean
  arr : string[]
  selecteditem :string=" "
  mystyle : {} = {"color" : "green", "font-weight" : "100px"};
  myclass : string = "myclass"

  constructor(){
    this.flag=true
    this.arr =["dog1","dog2"];
    
  }

  changeflag(){
    this.flag = !this.flag
    
  }

  setselecteditem(item : string){
    this.selecteditem = item;

  }
  changestyle(){
    this.mystyle = {"color" : "red", "font-weight" : "bold"}
  }

  changeclass(){
    this.myclass="myclass1"

  }


}
