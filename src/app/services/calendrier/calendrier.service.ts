import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {
  private donnerCalendrier=new BehaviorSubject<any>({})
  donnerCalendrier$=this.donnerCalendrier.asObservable();
    constructor() { }
    setData(data:any){
      const newData = data;
      this.donnerCalendrier.next(newData);
    }
}
