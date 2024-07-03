import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLoginService } from 'src/app/services/serviceLogin/service-login.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  pagePre:boolean=false
  constructor(private route: ActivatedRoute,private http: ServiceLoginService,) {}
  
  ngOnInit(): void {
    this.http.page$.subscribe(page => {
      this.pagePre = page;
  
    });
    console.log(this.pagePre)
    if(this.pagePre==true){
      this.route.queryParams
      .subscribe(params => {
        if (params["code"] !== undefined) {
          this.http.getTokenApresSignup(params["code"]).subscribe(result => {
            if (result === true) {
             console.log(result)
            } else {
              console.log("error auth")
            }
          });
        }
      }
    );

    }else{
      this.route.queryParams
      .subscribe(params => {
        if (params["code"] !== undefined) {
          this.http.getToken(params["code"]).subscribe(result => {
            if (result === true) {
             console.log(result)
            } else {
              console.log("error auth")
            }
          });
        }
      }
    );

    }
  }

}
