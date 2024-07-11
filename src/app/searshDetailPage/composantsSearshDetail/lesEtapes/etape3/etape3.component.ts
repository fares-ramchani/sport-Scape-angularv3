import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite/activite.service';
import { CalendrierService } from 'src/app/services/calendrier/calendrier.service';
import { Etape1Service } from 'src/app/services/etape1/etape1.service';
import { ReservationService } from 'src/app/services/reservation/reservation.service';
import { ServiceStadeService } from 'src/app/services/servicestade/service-stade.service';

@Component({
  selector: 'app-etape3',
  templateUrl: './etape3.component.html',
  styleUrls: ['./etape3.component.css']
})
export class Etape3Component implements OnInit {
  public etape3Form!: FormGroup;
  nomActivite:string=""
  idStade!:number
  idAthlete!:number
  donnerEtape1:any
  donnerCalendrier:any
  nomStade:any
  activite:any
  totalPrice:number=0
  stade:any
  verifReservation:boolean=false
  reservation:any={'jourReservation':'','heureReservation':'','etatReservation':'','prixTotal':0}
  constructor(private formBuilder: FormBuilder,private reservationService: ReservationService,private activiteService:ActiviteService,private etape1Service:Etape1Service,private calendrierService:CalendrierService,private serviceStadeService:ServiceStadeService,private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.etape3Form = this.formBuilder.group({
      numero: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$'),
      ]),
    });
    this.etape1Service.donneEtape1$.subscribe((donnerEtape1)=>{
      this.donnerEtape1=donnerEtape1
    })
    this.calendrierService.donnerCalendrier$.subscribe((donnerCalendrier)=>{
      this.donnerCalendrier=donnerCalendrier
    })
    this.getDetailActivite()
    this.getDetailStade()
  }
  getErrorsMessage(fieldName: string, error: any): string {
    if (error['required']) {
      return fieldName + ' obligatoire';
    } else if (error['min'] || error['max']) {
      return 'Téléphone invalide';
    } else if (fieldName === 'numero') {
      return 'Téléphone doit contenir exactement 8 chiffres';
    }
    return '';
  }
  showPromoCodeInput = false;

  showPromoCode() {
    this.showPromoCodeInput = !this.showPromoCodeInput;
  }

  currentSection: string = 'etape3';

  navigateTo(section: string) {
    this.currentSection = section;
  }
  verif:boolean=false
  descrip(){
    this.verif=!this.verif
  }
  getDetailActivite(){
    let nomActivite = String(this.activatedRoute.snapshot.paramMap.get('activite'));
   try {
      this.activiteService.getActivitieByName(nomActivite).subscribe((resultData: any) => {
        this.activite = resultData
        this.totalPrice=Number(this.activite.prix+0.71)
      });
    }catch(error) {
      console.log(error)
    }
  }
  getDetailStade(){
    let idStade = Number(this.activatedRoute.snapshot.paramMap.get('id'));
   try {
      this.serviceStadeService.getStadeById(idStade).subscribe((resultData: any) => {
        this.stade = resultData
      });
    }catch(error) {
      console.log(error)
    }
  }
  reserver(){
    try {
      this.nomActivite=String(this.activatedRoute.snapshot.paramMap.get('activite'))
      this.idStade=Number(this.activatedRoute.snapshot.paramMap.get('id'))
      this.idAthlete=1;
      this.reservation.jourReservation=this.donnerCalendrier
      this.reservation.heureReservation=this.donnerEtape1.debutSeance
      this.reservation.prixTotal=this.totalPrice
      this.reservationService.addReservation(this.reservation,this.idAthlete,this.idStade,this.nomActivite).subscribe((resultData: any) => {
    this.verifReservation=!this.verifReservation
      });
    }catch(error) {
      console.log(error)
    }
  }
}
