import { Component, OnInit } from '@angular/core';
import { DemooService } from 'src/app/Service/demoo.service';
@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor( private data:DemooService) { }
  message ="hello world";
  Message2 :string = "";


  ngOnInit(): void 
  {
     this.data.currentMessage.subscribe(message2 => message2 = message2)
    }
    receiveMessage($event :any){
      this.message = $event
        }

}
