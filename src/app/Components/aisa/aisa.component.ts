import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aisa',
  templateUrl: './aisa.component.html',
  styleUrls: ['./aisa.component.css']
})
export class AisaComponent implements OnInit {

  @Input() share: string =" " ;
  @Input() abcd: any =" ";
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.share);
    console.log(this.abcd);
    
  }

}
