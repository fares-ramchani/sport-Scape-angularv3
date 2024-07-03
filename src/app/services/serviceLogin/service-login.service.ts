import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Token } from 'src/app/Token';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  private page = new BehaviorSubject<boolean>(false);
  page$ = this.page.asObservable();

  private role = new BehaviorSubject<String>("");
  role$ = this.role.asObservable();

  private username = new BehaviorSubject<string>("");
  username$ = this.username.asObservable();

  private accessToken = new BehaviorSubject<string>("");
  accessToken$ = this.accessToken.asObservable();

  private urlimage = new BehaviorSubject<string>("");
  urlimage$ = this.urlimage.asObservable();

  // private idtoken = new BehaviorSubject<string>("");
  // idtoken$ = this.idtoken.asObservable();
  idtoken: any;

  constructor(private http: HttpClient, private router: Router) { }




  public login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    let params = new HttpParams().set("username", username).set("password", password);
    return this.http.post<any>("http://localhost:8081/auth/login", params, options)
  }





  public loadProfile(data: any) {
    const newisAuthenticated = true;
    this.isAuthenticated.next(newisAuthenticated);

    const newisaccessToken = data['acces-token'];
    this.accessToken.next(newisaccessToken);

    let decodedJwt: any = jwtDecode(newisaccessToken);

    const newusername = decodedJwt.sub;
    const id=decodedJwt.sub;
    this.username.next(newusername);

    const newrole = decodedJwt.scope;
    this.role.next(newrole);
    if(newrole=="PROPRITAIRE"){
      this.getCv(id).subscribe({
        next:data=>{
          this.urlimage.next('data:image/jpeg;base64,'+data.photoPropritaire);
        }
      })
    }


    this.router.navigateByUrl("accueil")


  }
  public getCv(id:any)
  {
    return this.http.get<any>("http://localhost:8081/propritaire/GetlogosPropritaire?id="+id)
  }


  get(url: string): any {
    return this.http.get("http://localhost:8081" + url);
  }

  getPrivate(url: string): any {
    return this.http.get("http://localhost:8081" + url, {headers: new HttpHeaders({"Authorization": "Bearer " + this.idtoken})});
  }

  
  getToken(code: string): Observable<boolean> {
    return this.http.get<Token>("http://localhost:8081/auth/callback?code=" + code, {observe: "response"})
      .pipe(map((response: HttpResponse<Token>) => {
        if (response.status === 200 && response.body !== null) {
  
          this.idtoken = response.body;

      
          const newisaccessToken = response.body.token;
          this.accessToken.next(newisaccessToken);
        
          let decodedJwt:any = jwtDecode(this.idtoken.token);
          

          const newusername = decodedJwt.name;
          this.username.next(newusername);


          const newurlimage = decodedJwt.picture;
          this.urlimage.next(newurlimage);

          
          const newisAuthenticated = true;
          this.isAuthenticated.next(newisAuthenticated);


          return true;
        } else {
          return false;
        }
      }));
  }

  getTokenApresSignup(code: string): Observable<boolean> {
    return this.http.get<Token>("http://localhost:8081/auth/signUpGoogle?code=" + code, {observe: "response"})
      .pipe(map((response: HttpResponse<Token>) => {
        if (response.status === 200 && response.body !== null) {
  
          this.idtoken = response.body;

      
          const newisaccessToken = response.body.token;
          this.accessToken.next(newisaccessToken);
        
          let decodedJwt:any = jwtDecode(this.idtoken.token);
          

          const newusername = decodedJwt.name;
          this.username.next(newusername);


          const newurlimage = decodedJwt.picture;
          this.urlimage.next(newurlimage);

          
          const newisAuthenticated = true;
          this.isAuthenticated.next(newisAuthenticated);


          return true;
        } else {
          return false;
        }
      }));
  }


  prevpage(){
    const newisAuthenticated = true;
    this.page.next(newisAuthenticated);

  }




  logout() {
    const newisAuthenticated = false;
    this.isAuthenticated.next(newisAuthenticated);

    const newisaccessToken = "";
    this.accessToken.next(newisaccessToken);


    const newusername = "";
    this.username.next(newusername);

    const newrole = "";
    this.role.next(newrole);


  }
}