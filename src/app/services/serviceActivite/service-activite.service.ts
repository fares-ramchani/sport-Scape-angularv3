import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceActiviteService {

  constructor(private http:HttpClient) { }
  public getToutActivite(){

    return this.http.get<any>("http://localhost:8081/activite/all");
  }
}
