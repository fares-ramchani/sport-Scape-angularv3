import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Propritaire } from 'src/app/models/modelPropritaireDeStade/Propritaire.model';
import { SportEntrepriseService } from 'src/app/services/serviceSportEntreprisePage/sport-entreprise.service';

@Component({
  selector: 'app-sport-entreprisecomposant1',
  templateUrl: './sport-entreprisecomposant1.component.html',
  styleUrls: ['./sport-entreprisecomposant1.component.css']
})
export class SportEntreprisecomposant1Component implements OnInit {
  public sportEntreprise!: FormGroup;
  public selectedLogo!: File ;
  public selectedLogoUrl!: string | ArrayBuffer | null| undefined ;
  constructor(private formBuilder: FormBuilder,private SportEntrepriseService:SportEntrepriseService) {}

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
    let Propritaire:Propritaire=this.sportEntreprise.value
    const uploadData = new FormData();
    uploadData.append('propritaireDeStadeRequestDTO',JSON.stringify(Propritaire));
    uploadData.append('logo', this.selectedLogo, this.selectedLogo.name);

    this.SportEntrepriseService.SignupPropritaire(uploadData).subscribe({
      next: data => {
      },
      error: error => {
        console.error('Error:', error);
      }
    });


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
