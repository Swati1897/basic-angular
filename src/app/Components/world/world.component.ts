import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
    data : string = "hey.., It is Parent component!";
    parson = {  //make objects 
         name:'swati singh',
         college_name:'GHRCE',
         city:'nagpur'
        };

    country: any = ['India','USA', 'UK', 'China','Egypt'];
  constructor() { }

  ngOnInit(): void {
  }

}
