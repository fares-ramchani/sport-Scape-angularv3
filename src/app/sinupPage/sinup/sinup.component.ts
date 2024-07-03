import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Athlete } from 'src/app/models/modelAthlete/Athlete.model';
import { ServiceLoginService } from 'src/app/services/serviceLogin/service-login.service';
import { ServiceAthleteService } from 'src/app/services/servicesAthletes/service-athlete.service';

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent {
  public AthleteForm!:FormGroup;
  url: string = "";
  constructor(private httpClient: HttpClient,
    private formBuilder:FormBuilder,
    private ServiceAthleteService:ServiceAthleteService,
    private router : Router,private ServiceLoginService : ServiceLoginService){
    
  }
  ngOnInit() {
    this.AthleteForm=this.formBuilder.group({
      nom:this.formBuilder.control('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      prenom:this.formBuilder.control('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      telephone:this.formBuilder.control('',[Validators.required,Validators.pattern('^[0-9]{8}$'),]),
      mail:this.formBuilder.control('',[Validators.required,Validators.email,]),
      motDePasse:this.formBuilder.control('',Validators.required),
    })
    this.ServiceLoginService.prevpage()
    this.ServiceLoginService.get("/auth/url").subscribe((data: any) => this.url = data.authURL);
  
    
  }


  saveAthlete(){
    let Athlete:Athlete=this.AthleteForm.value
    this.ServiceAthleteService.saveAthlete(Athlete).subscribe({
      next : data=>{   
          this.router.navigateByUrl("/login")    
              }
              
          }
        )
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
