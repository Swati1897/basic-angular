import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  message : string = " ";
  data:string =" ";
  res: string= " ";

  constructor() { }

  ngOnInit(): void {
   
  }
  //  acceptResult(result: any){
  //    console.log('parent - outEvent', result);
  //    this.res = result;
  //  }
}
