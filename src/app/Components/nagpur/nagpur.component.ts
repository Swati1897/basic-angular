import { DemooService } from './../../Service/demoo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nagpur',
  templateUrl: './nagpur.component.html',
  styleUrls: ['./nagpur.component.css']
})
export class NagpurComponent implements OnInit {
  
   message2 : string=" ";

  constructor( private data: DemooService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message2 => this.message2 = message2)
  }
  
  newMessage(){
    this.data.changeMessage("hello from Sibling");
  }



}
