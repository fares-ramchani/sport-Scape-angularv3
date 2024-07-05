import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Propritaire } from 'src/app/models/modelPropritaireDeStade/Propritaire.model';
import { SportEntrepriseService } from 'src/app/services/serviceSportEntreprisePage/sport-entreprise.service';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/app/environment/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sport-entreprisecomposant1',
  templateUrl: './sport-entreprisecomposant1.component.html',
  styleUrls: ['./sport-entreprisecomposant1.component.css']
})
export class SportEntreprisecomposant1Component implements OnInit {
  public sportEntreprise!: FormGroup;
  public selectedLogo!: File ;
  partier:number=0
  Propritaire!:Propritaire
  public selectedLogoUrl!: string | ArrayBuffer | null| undefined ;
  stripePromise = loadStripe(environment.stripe);
  constructor(private formBuilder: FormBuilder,private SportEntrepriseService:SportEntrepriseService,private http: HttpClient) {}

  ngOnInit() {
    this.sportEntreprise = this.formBuilder.group({
      nom: this.formBuilder.control('', [
        Validators.required,
      ]),
      prenom: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      mail: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      telephone: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$'),
      ]),
      activiteSportive: this.formBuilder.control('', Validators.required),

      entrepriseee: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
    });
  }
  public fileChangeLogo(event:any)
  {
    this.selectedLogo=event.target.files[0]
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedLogoUrl = e.target?.result;
    };
    reader.readAsDataURL(this.selectedLogo);
  }

  signupPropritaire(){
    this.Propritaire=this.sportEntreprise.value
    const uploadData = new FormData();
    uploadData.append('propritaireDeStadeRequestDTO',JSON.stringify(this.Propritaire));
    uploadData.append('logo', this.selectedLogo, this.selectedLogo.name);

    this.SportEntrepriseService.SignupPropritaire(uploadData).subscribe({
      next: data => {
        this.partier=1
      },
      error: error => {
        console.error('Error:', error);
      }
    });


  }
  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'compte',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: 5000,
      quantity: '1',
      cancelUrl: 'http://localhost:4200',
      successUrl: 'http://localhost:4200/login',
    };

    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
      .post(`${environment.serverUrl}/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platfor
        if(stripe){

          stripe.redirectToCheckout({
            sessionId: data.id,
          });
        }else{
          console.log('Error Loading Stripe');
        }
      
      });
      this.http.post<any>("http://localhost:8081/propritaire/VerifierCompte",this.Propritaire.entrepriseee).subscribe({
        next: data => {
  }
}
      )
    }



  getErrorsMessage(fieldName: string, error: any): string {
    if (error['required']) {
      return fieldName + ' obligatoire';
    } else if (error['email']) {
      return 'mail invalide';
    } else if (error['min'] || error['max']) {
      return 'Téléphone invalide';
    } else if (error['pattern']) {
      if (fieldName === 'Entreprise' || fieldName === 'Responsable') {
        return fieldName + ' doit contenir uniquement des lettres (a-z, A-Z)';
      } else if (fieldName === 'telephone') {
        return 'Téléphone doit contenir exactement 8 chiffres';
      }
    }
    return '';
  }
  onSubmit() {
    // if (this.contactForm.valid) {
    //   // Handle form submission
    //   console.log('Form Submitted', this.contactForm.value);
    // }
    // console.log(this.contactForm.value)
  }
}
