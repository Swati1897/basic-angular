import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DemooService } from './../../Service/demoo.service';


@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
   
  message: string =" hola india ! ";
   @Output() messageEvent = new EventEmitter<string>();

   message2: string=" ";

  constructor( private data:DemooService) { }

  sendMessage(){
    this.messageEvent.emit(this.message)
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message2 => message2 = message2)
  }

}
