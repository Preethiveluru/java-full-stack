import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrl: './factorial.component.css'
})
export class FactorialComponent {
  num: number = 0; // Number input from the user
  factorialTable: { number: number; factorial: number }[] = []; // Table data

  // Method to generate the factorial table
  generateFactorialTable() {
    this.factorialTable = [];
    for (let i = 1; i <= this.num; i++) {
      this.factorialTable.push({ number: i, factorial: this.factorial(i) });
    }
  }

  // Recursive function to calculate factorial
  factorial(n: number): number {
    return n <= 1 ? 1 : n * this.factorial(n - 1);
  }



}

