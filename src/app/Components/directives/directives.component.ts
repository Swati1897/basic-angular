import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
    
 showCard:boolean = true;
 contries = ['IND','USA','UK','RUS','RSA'];
 records: any[]=[
   {id:1, name:'swati', country:'Ind'},
   {id:2, name:'shilpa', country:'Rus'},
   {id:3, name:'shivika', country:'Usa'},
   {id:4, name:'raj', country:'Uk'},
   {id:5, name:'suman', country:'Pk'},
]
public color ="red";

scoreObtained = 10  ;


  constructor() { }

  ngOnInit(): void {

    if (5> 3) {
      console.log("5 is bigger");    
    }else{
      console.log("5 is smaller");
    }
    console.log('$$$$$$$$$$$$$$');

    ///// Ternary (3) Operator 
      (5 > 3) ? console.log("10 is bigger") : console.log("3 is smaller than 5");

  }

}
