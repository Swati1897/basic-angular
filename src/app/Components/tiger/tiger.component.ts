import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiger',
  templateUrl: './tiger.component.html',
  styleUrls: ['./tiger.component.css']
})
export class TigerComponent implements OnInit {
  
  @Input() xyzz: string = 'initial';

  @Input() result: number = 0;




  constructor() { }

  ngOnInit(): void {
  }

}
