import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})
export class AmericaComponent implements OnInit {

  @Input() alpha: any=" ";
  constructor() { }

  ngOnInit(): void {
    console.log(this.alpha);
  }

}
