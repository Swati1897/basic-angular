import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']

})
export class BindingComponent implements OnInit {

    // variables:--- 
  
  // Interpolation
  name:string ='swati';
  rollNo: number =10;
  pass:boolean = true;
  
  // Property Binding
  fullName: string ='swati singh';
  inputType: string ='password';
  maxL:string ='10';
  minL:string ='2';

  // Event Binding
  message:string ='done '; // static  declaration      //declareation + initization
     // OR
  //message:string =' '; // Dynamic declaration


  // Event Binding codeevolution videos
public code = "Code Evolutions";
public greeting = " ";

// Two way binding 
twoWay: string ='swati singh ';

// Class Binding
cssClassName: string = 'box-styling';

styleObject={
  bgColor: 'red',
  textColor:'black',
  brd:'2px solid red',
  ht: '200px',
  wd:'300px'
};

public titleStyles ={
  color:"bule",
  fontStyle: "italic"
}


  constructor() { }

  //1st method
  showMessage(){
    this.message ='Hey..! button is clicked..!'; //reassignment (changed it's value)  
  
  }
       // 2nd method
  // showMessage(name:string){
  //   this.message ='hey..!'+ name+ 'has clicked the button..!';
  // }

      //3rd method 
    // showMessage(name:srting){
    //   this.message =` Hey..! ${name} has clicked the button`;
    // }
  
   //  ' ' - single
   //   " " - Double
   //   ` ` - back tics






  ngOnInit(): void {
  }

  onClick(){
    console.log('Welcome to codeEvolution');
    this.greeting = 'Welcome to codeEvolution';
  }
}
