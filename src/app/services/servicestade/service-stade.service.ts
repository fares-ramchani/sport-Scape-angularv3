import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceStadeService {

  constructor(private Http:HttpClient) { }
  public ajouterStade(file:FormData)
  {
    return this.Http.post<any>("http://localhost:8081/stade/ajouterStade",file)
  }
  public getToutLesStade(){

    return this.Http.get<any>("http://localhost:8081/stade/getToutLesStades");
  }
}
