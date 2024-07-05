import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicepropritaireDeStadeService {

  constructor(private http:HttpClient) { }
  public getToutPropritaireDeStade(){

    return this.http.get<any>("http://localhost:8081/propritaire/GetTousPropritaire");
  }
  public nombreDecompteVerifier(){

    return this.http.get<any>("http://localhost:8081/propritaire/nombreDecompteVerifier");
  }
  public nombreDecompteNonVerifier(){

    return this.http.get<any>("http://localhost:8081/propritaire/nombreDecompteNonVerifier");
  }
}
