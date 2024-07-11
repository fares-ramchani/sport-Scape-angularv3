import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Etape1Service {
private donnerEtape1=new BehaviorSubject<any>({})
donneEtape1$=this.donnerEtape1.asObservable();
  constructor() { }
  setData(data:any){
    const newData = data;
    this.donnerEtape1.next(newData);
  }
}
