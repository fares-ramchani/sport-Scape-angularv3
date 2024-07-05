import { Component } from '@angular/core';
import { ServiceLoginService } from 'src/app/services/serviceLogin/service-login.service';

@Component({
  selector: 'app-nav-bar-dashboard',
  templateUrl: './nav-bar-dashboard.component.html',
  styleUrls: ['./nav-bar-dashboard.component.css']
})
export class NavBarDashboardComponent {
   username:String|null=""
    role:String|null=""
    constructor(private ServiceLoginService:ServiceLoginService){}
    ngOnInit()
    {
      this.ServiceLoginService.role$.subscribe(role => {
        if(localStorage.getItem("role")==null){
          this.role = role;
       
        }else{
          this.role=localStorage.getItem("role");
        }
      
    
      });
    
      this.ServiceLoginService.username$.subscribe(username => {
        if(localStorage.getItem("username")==null){
          this.username = username;
       
        }else{
          this.username=localStorage.getItem("username");
        }
    
      });
      console.log(this.username)

}
}
