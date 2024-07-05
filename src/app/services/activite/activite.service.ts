import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activite } from 'src/app/models/activite/activite.model';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpClient) { }

  getAllActivities(): Observable<Activite[]> {
    return this.http.get<Activite[]>('http://localhost:8081/activite/all');
  }

  getActivitieById(id:number): Observable<Activite> {
    return this.http.get<Activite>('http://localhost:8081/activite/ById/'+id);
  }
  getActivitieByName(name:string): Observable<Activite> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('name', name);
    return this.http.get<Activite>('http://localhost:8081/activite/ByName',{ params: queryParams });
  }
  addActivitie(activitie:Activite):Observable<any> {
    return this.http.post('http://localhost:8081/activite/add/',activitie)
  }
  updateActivitie(id:number,activitie:Activite):Observable<any> {
    return this.http.put('http://localhost:8081/activite/update/'+id,activitie)
  }
  deleteActivitie(id: number): Observable<any> {
    return this.http.delete('http://localhost:8081/activite/delete/'+id);
  }
}
