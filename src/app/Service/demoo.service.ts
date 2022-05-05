import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemooService {

  private meassageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.meassageSource.asObservable();
  
constructor() { }

  changeMessage(message2 : string){
     this.meassageSource.next(message2)
  }
}

