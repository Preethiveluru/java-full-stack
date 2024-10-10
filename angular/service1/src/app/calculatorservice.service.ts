import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorserviceService {

  constructor() { }

  getAddition(a:number,b:number):number{
     let sum=a+b
     return sum
  }

  getSub(a:number,b:number):number{
    let su=a-b
    return su
  }
}
