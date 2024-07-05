import { HttpClient, HttpParams } from '@angular/common/http';
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
  public getStadeById(idStade:number){
    return this.Http.get<any>("http://localhost:8081/stade/getStadeById"+"/"+idStade);
  }
  public getStadeByVilleAndActivite(ville:string,nomActivite:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('ville', ville);
    queryParams = queryParams.append('nomActivite', nomActivite);
    return this.Http.get<any>("http://localhost:8081/stade/getStadeByVilleAndActivite",{ params: queryParams });
  }
}
