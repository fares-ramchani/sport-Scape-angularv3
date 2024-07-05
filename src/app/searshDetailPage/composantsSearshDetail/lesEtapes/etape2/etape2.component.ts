import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite/activite.service';
import { CalendrierService } from 'src/app/services/calendrier/calendrier.service';
import { Etape1Service } from 'src/app/services/etape1/etape1.service';
import { ServiceStadeService } from 'src/app/services/servicestade/service-stade.service';

@Component({
  selector: 'app-etape2',
  templateUrl: './etape2.component.html',
  styleUrls: ['./etape2.component.css'],
})
export class Etape2Component implements OnInit{
  donnerEtape1:any
  donnerCalendrier:any
  activite:any
  totalPrice:number=0
  stade:any
  constructor(private etape1Service:Etape1Service,private calendrierService:CalendrierService, private activiteService:ActiviteService, private serviceStadeService:ServiceStadeService, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.etape1Service.donneEtape1$.subscribe((donnerEtape1)=>{
      this.donnerEtape1=donnerEtape1
    })
    this.calendrierService.donnerCalendrier$.subscribe((donnerCalendrier)=>{
      this.donnerCalendrier=donnerCalendrier
    })
    this.getDetailActivite()
    this.getDetailStade()
  }

  verif: boolean = false;
  descrip() {
    this.verif = !this.verif;
  }
  
  currentSection: string = 'etape2';

  navigateTo(section: string) {
    this.currentSection = section;
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
}
