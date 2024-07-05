import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:8081/reservation/getAllReservation');
  }
  addReservation(reservation:Reservation,idAthlete:number,idStade:number,nomActivite:string):Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('idAthlete', idAthlete);
    queryParams = queryParams.append('idStade', idStade);
    queryParams = queryParams.append('nomActivite', nomActivite);
    return this.http.post('http://localhost:8081/reservation/addReservation/',reservation,{ params: queryParams })
  }
  getReservationsByAthlete(id:number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:8081/reservation/getAllReservationByAthlete'+id);
  }
  getAllReservationByStade(id:number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:8081/reservation/getAllReservationByStade'+id);
  }
}
