import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Athlete } from 'src/app/models/modelAthlete/Athlete.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceAthleteService {

    constructor(private http:HttpClient) { }
    public saveAthlete(Athlete:Athlete){

      return this.http.post<Athlete>("http://localhost:8081/Athlete/ajouterAthlete",Athlete);
    }
}
