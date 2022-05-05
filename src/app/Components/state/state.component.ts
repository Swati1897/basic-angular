import { Component, OnInit } from '@angular/core';
import { DemooService } from 'src/app/Service/demoo.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
 
   message2: string=" ";

  constructor(private data: DemooService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message2 => this.message2 = message2)
  }

}
