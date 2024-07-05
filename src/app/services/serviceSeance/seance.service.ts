import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seance } from 'src/app/models/seance/seance.model';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private http: HttpClient) { }
  getSeancesByActiviteAndStade(jour:string,id:number,nomActivite:string): Observable<Seance[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('jour', jour);
    queryParams = queryParams.append('id', id);
    queryParams = queryParams.append('nomActivite', nomActivite);
    return this.http.get<Seance[]>('http://localhost:8081/Seances/getSeanceByJourAndStadeAndActivite',{ params: queryParams });
  }
  getSeanceByJourAndStadeAndActivite(jour:string,id:number,nomActivite:string): Observable<Seance[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('jour', jour);
    queryParams = queryParams.append('id', id);
    queryParams = queryParams.append('nomActivite', nomActivite);
    return this.http.get<Seance[]>('http://localhost:8081/Seances/getSeanceByJourAndStadeAndActivite',{ params: queryParams });
  }
  addSeance(seance:Seance,id:number):Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', id);
    return this.http.post('http://localhost:8081/Seances/getSeanceByJourAndStade',seance,{ params: queryParams })
  }
}
