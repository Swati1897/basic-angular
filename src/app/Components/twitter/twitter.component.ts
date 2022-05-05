import { Component, OnInit } from '@angular/core';
import { DemooService } from 'src/app/Service/demoo.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
    
  message2 :string = "";

  constructor(private data:DemooService ) { }

  ngOnInit(): void 
  {
    this.data.currentMessage.subscribe(message2 => message2 = message2)
  }

}
