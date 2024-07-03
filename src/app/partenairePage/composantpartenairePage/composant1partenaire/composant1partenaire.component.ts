import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { partenaire } from 'src/app/models/modelpartenaire/partenaire.model';
import { ServiceStadeService } from 'src/app/services/servicestade/service-stade.service';

@Component({
  selector: 'app-composant1partenaire',
  templateUrl: './composant1partenaire.component.html',
  styleUrls: ['./composant1partenaire.component.css'],
})
export class Composant1partenaireComponent implements OnInit {
  public partenaireForm!: FormGroup;
  public selectedImage1!: File ;
  public selectedImageUrl1!: string | ArrayBuffer | null| undefined ;
  public selectedImage2!: File ;
  public selectedImageUrl2!: string | ArrayBuffer | null| undefined ;
  public selectedImage3!: File ;
  public selectedImageUrl3!: string | ArrayBuffer | null| undefined ;
  public selectedImage4!: File ;
  public selectedImageUrl4!: string | ArrayBuffer | null| undefined ;
  public selectedImage5!: File ;
  public selectedImageUrl5!: string | ArrayBuffer | null| undefined ;

  constructor(private formBuilder: FormBuilder,private ServiceStadeService:ServiceStadeService) {}

  ngOnInit() {
    this.partenaireForm = this.formBuilder.group({
      nom: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      code: this.formBuilder.control('', [
        Validators.required,
      ]),
      ville: this.formBuilder.control('', [
        Validators.required,
      ]),
      adresse: this.formBuilder.control('', [
        Validators.required,
      ]),
      activite: this.formBuilder.control('', [
        Validators.required,
      ]),
      nombremax: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{2}$'),
      ]),
      telephone: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$'),
      ]),
      mail: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }
  ajouterStade(){
    let partenaire:partenaire=this.partenaireForm.value
    const uploadData = new FormData();
    uploadData.append('stadeRequestDTO',JSON.stringify(partenaire));
    uploadData.append('image1', this.selectedImage1, this.selectedImage1.name);
    uploadData.append('image2', this.selectedImage2, this.selectedImage2.name);
    uploadData.append('image3', this.selectedImage3, this.selectedImage3.name);
    uploadData.append('image4', this.selectedImage4, this.selectedImage4.name);
    uploadData.append('image5', this.selectedImage5, this.selectedImage5.name);

    this.ServiceStadeService.ajouterStade(uploadData).subscribe({
      next: data => {
      },
      error: error => {
        console.error('Error:', error);
      }
    });


  }

  public fileChangeimage1(event:any)
  {
    this.selectedImage1=event.target.files[0]
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImageUrl1 = e.target?.result;
    };
    reader.readAsDataURL(this.selectedImage1);
  }

  public fileChangeimage2(event:any)
  {
    this.selectedImage2=event.target.files[0]
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImageUrl2 = e.target?.result;
    };
    reader.readAsDataURL(this.selectedImage2);
  }

  public fileChangeimage3(event:any)
  {
    this.selectedImage3=event.target.files[0]
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImageUrl3 = e.target?.result;
    };
    reader.readAsDataURL(this.selectedImage3);
  }

  public filehangeimage4(event:any)
  {
    this.selectedImage4=event.target.files[0]
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImageUrl4 = e.target?.result;
    };
    reader.readAsDataURL(this.selectedImage4);
  }

  public filehangeimage5(event:any)
  {
    this.selectedImage5=event.target.files[0]
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedImageUrl5 = e.target?.result;
    };
    reader.readAsDataURL(this.selectedImage5);
  }





  getErrorsMessage(fieldName: string, error: any): string {
    if (error['required']) {
      return fieldName + ' obligatoire';
    } else if (error['email']) {
      return 'Email invalide';
    } else if (error['min'] || error['max']) {
      return 'Téléphone invalide';
    } else if (error['pattern']) {
      if (fieldName === 'nom') {
        return fieldName + ' doit contenir uniquement des lettres (a-z, A-Z)';
      } else if (fieldName === 'telephone') {
        return 'Téléphone doit contenir exactement 8 chiffres';
      } else if (fieldName === 'nombremax') {
        return 'max 2 chiffre';
      }
      
    }
    return '';
  }
  Latitude: any;
  Longtitude: any;
  display: any;

  center: google.maps.LatLngLiteral = {
    lat: 34,
    lng: 10,
  };
  zoom = 5.5;
  // 33,91208974667019 moveMap(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.center = (event.latLng.toJSON());
  // }
  // move(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.display = event.latLng.toJSON();
  // }
  markerOption: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPosition!: google.maps.LatLngLiteral;

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.markerPosition = event.latLng.toJSON();
      this.display = event.latLng.toJSON();
      this.Latitude = this.display?.lat;
      this.Longtitude = this.display?.lng;
    }
  }
}
