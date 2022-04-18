import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //name 
  templateUrl: './app.component.html', //template
  styleUrls: ['./app.component.css']
})

// class - It is combination of variables and methods/ functions.

export class AppComponent {
  title = 'Basic-angular';

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
  message:string ='';    //declareation + initization

  constructor(){

  }
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
  
}
  //  ' ' - single
  //   " " - Double
  //   ` ` - back tics