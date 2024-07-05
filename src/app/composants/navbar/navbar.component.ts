import { Component } from '@angular/core';
import { ServiceLoginService } from 'src/app/services/serviceLogin/service-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  closenav:boolean=false
  isAuthenticated:String|null="false"
  username:String|null=""
  imageurl:String|null=""
  role:String|null=""
  // image:String=""
  constructor(private ServiceLoginService:ServiceLoginService){}



  ngOnInit()
{
  this.ServiceLoginService.urlimage$.subscribe(urlimage => {
    if(localStorage.getItem("imageurl")==null){
      this.imageurl = urlimage;
   
    }else{
      this.imageurl=localStorage.getItem("imageurl");
    }
  });
 
  this.ServiceLoginService.isAuthenticated$.subscribe(isAuthenticated => {
    if(localStorage.getItem("isAuthenticated")==null){
      this.isAuthenticated = isAuthenticated;
   
    }else{
      this.isAuthenticated=localStorage.getItem("isAuthenticated");
    }

  });

  this.ServiceLoginService.username$.subscribe(username => {
     if(localStorage.getItem("username")==null){
          this.username = username;
       
        }else{
          this.username=localStorage.getItem("username");
        }

  });
  this.ServiceLoginService.role$.subscribe(role => {
    if(localStorage.getItem("role")==null){
      this.role = role;
   
    }else{
      this.role=localStorage.getItem("role");
    }

  });

  // this.ServiceLoginService.image$.subscribe(image => {
  //   this.image = image;

  // });

 
}



logout(){
  this.ServiceLoginService.logout();
}


  closepopup() {
    this.closenav=!this.closenav
  }
  Deconnexion(){
   

  }
}
