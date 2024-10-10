import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  name : string ="preethi";
  age:number=12;
  salary:any=500000.0;
  imagePath:string='image1.png';
  width:number=500
  height:number=400
  btntext : string;
  fname : string=" ";


  constructor(){
    this.btntext= "change name"
  }


  getAddition( a:number,b:number) : number {
    let sum = a + b
    return sum

  }

  changename():void{
    this.name ="preethiv"

  }

  changeimg():void{
    if(this.imagePath=="th.jpg"){
      this.imagePath="image1.png";
    }
    else{
      this.imagePath="th.jpg";
    }
    
  }
}
