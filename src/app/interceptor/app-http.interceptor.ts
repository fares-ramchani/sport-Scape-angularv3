import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes("/auth/login")
    &&!request.url.includes("/auth/signUpGoogle")
    &&!request.url.includes("/auth/url")
    &&!request.url.includes("/auth/callback")
    &&!request.url.includes("/auth/AcessToken")
    &&!request.url.includes("/propritaire/ajouterPropritaire")
    &&!request.url.includes("/propritaire/VerifierCompte")
    &&!request.url.includes("/stade/getToutLesStades")
    &&!request.url.includes("/stade/getStadeByIdAndActivite")
    &&!request.url.includes("/stade/getStadeById")
    &&!request.url.includes("/stade/getStadeByVilleAndActivite")
    &&!request.url.includes("/activite")
    &&!request.url.includes("/Seances")
    &&!request.url.includes("/stripe/payment")
    ) {
      let newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('accestoken'))
      })
      return next.handle(newRequest);
    } else
      return next.handle(request);

  }
}
