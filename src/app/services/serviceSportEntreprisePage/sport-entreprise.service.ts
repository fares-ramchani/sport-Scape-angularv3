import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportEntrepriseService {

  constructor(private Http:HttpClient) { }
  public SignupPropritaire(file:FormData)
  {
    return this.Http.post<any>("http://localhost:8081/propritaire/ajouterPropritaire",file)
  }
}
