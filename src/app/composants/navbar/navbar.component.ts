import { Component } from '@angular/core';
import { ServiceLoginService } from 'src/app/services/serviceLogin/service-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  closenav:boolean=false
  isAuthenticated:boolean=false
  username:String=""
  imageurl:any
  // image:String=""
  constructor(private ServiceLoginService:ServiceLoginService){}



  ngOnInit()
{
  this.ServiceLoginService.urlimage$.subscribe(urlimage => {
    this.imageurl = urlimage;

  });
 
  this.ServiceLoginService.isAuthenticated$.subscribe(isAuthenticated => {
    this.isAuthenticated = isAuthenticated;

  });

  this.ServiceLoginService.username$.subscribe(username => {
    this.username = username;

  });

  // this.ServiceLoginService.image$.subscribe(image => {
  //   this.image = image;

  // });

 
}






  closepopup() {
    this.closenav=!this.closenav
  }
  Deconnexion(){
   

  }
}
