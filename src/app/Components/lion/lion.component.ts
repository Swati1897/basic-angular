import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lion',
  templateUrl: './lion.component.html',
  styleUrls: ['./lion.component.css'],
})
export class LionComponent implements OnInit {
  @Output() public childEvent = new EventEmitter(); // EventEmitter<datatype>
  message = ' ';

  @Output() public abcdEvent =new EventEmitter();
   data ='';

  @Output() outEvent = new EventEmitter<number>();
   result: number = 0 ;
  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit('Hey Code evolution !');
  }
  Event(){
    this.abcdEvent.emit('hey');
  }
  // acceptResult(result: any){
  //   console.log('parent - outEvent', result);
  //   this.res = result;
  // }
   onShare() {
    this.outEvent.emit(this.result);

    }
}
