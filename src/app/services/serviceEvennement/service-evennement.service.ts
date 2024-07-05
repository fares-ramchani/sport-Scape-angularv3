import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEvennementService {
  constructor(private http:HttpClient) { }
  public getToutEvennement(){

    return this.http.get<any>("http://localhost:8081/evenement/all");
  }
}
