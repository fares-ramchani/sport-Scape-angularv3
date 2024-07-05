import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceLoginService } from 'src/app/services/serviceLogin/service-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!:FormGroup;
  url: string = "";
  messageError:string=""


  constructor (private fb : FormBuilder ,
    private ServiceLoginService : ServiceLoginService){
    
  }
  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username :this.fb.control('',Validators.required),
      password:this.fb.control('',Validators.required)
    })
    this.ServiceLoginService.get("/auth/url").subscribe((data: any) => this.url = data.authURL);
    
    
 

  }
    
  

  login1(){
    let username=this.formLogin.value.username;
    let pwd=this.formLogin.value.password;
    this.ServiceLoginService.login(username,pwd).subscribe({
      next : data=> { 
        this.messageError=data.er1
        this.ServiceLoginService.loadProfile(data)
        
      
       
       

       
       
          
        }
        })
      

  }





  getErrorsMessage(fieldName: string, error: any): string {
    if (error['required']) {
      return fieldName + ' obligatoire';
    } else if (error['email']) {
      return 'Email invalide';
    } else if (error['pattern']) {
      if (fieldName === 'nom') {
        return fieldName + ' doit contenir uniquement des lettres (a-z, A-Z)';
      } else if (fieldName === 'telephone') {
        return 'Téléphone doit contenir exactement 8 chiffres';
      } 
      
    }
    return '';
  }
}
