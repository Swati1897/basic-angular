import { Component, OnInit } from '@angular/core';
import { DemooService } from 'src/app/Service/demoo.service';
@Component({
  selector: 'app-pune',
  templateUrl: './pune.component.html',
  styleUrls: ['./pune.component.css']
})
export class PuneComponent implements OnInit {
 
   message2: string =" ";

  constructor( private data: DemooService ) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message2 => this.message2 = message2)
  }

}
