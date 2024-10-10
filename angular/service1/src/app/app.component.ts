import { Component, input } from '@angular/core';
import { CalculatorserviceService } from './calculatorservice.service';
import { FactorialService } from './factorial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service1';
  sum:number
  su:number
  factorials :number[]=[];
  input:number=0

  constructor(private calc:CalculatorserviceService,private fact:FactorialService){
    this.sum = calc.getAddition(10,7);
    this.su = calc.getSub(10,7)
   
  };
  getfactorialvalues(){
    this.factorials= this.fact.getfactorialvalue(this.input)

   }
}
