import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  result:number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
  onAdd(number1: number, number2: number){
    this.result = number1 + number2
  }
  onSub(number1: number, number2: number){
    this.result = number1 - number2
  }
  onDiv(number1: number, number2: number){
    this.result = number1 / number2
  }

  onMult(number1: number, number2: number){
    this.result = number1 * number2
  }


}
