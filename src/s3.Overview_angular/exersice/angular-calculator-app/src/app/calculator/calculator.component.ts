import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public numberOne = 0 ;
  public numberTwo = 0 ;
  public result = 0 ;

  constructor() { }

  ngOnInit(): void {
  }
  congNum():void{
    this.result = Number(this.numberOne) + Number(this.numberTwo);
  }
  truNum():void{
    this.result = Number(this.numberOne) - Number(this.numberTwo);
  }
  nhanNum():void{
    this.result = Number(this.numberOne) * Number(this.numberTwo);
  }
  chiaNum():void{
    this.result = Number(this.numberOne) / Number(this.numberTwo);
  }

}
