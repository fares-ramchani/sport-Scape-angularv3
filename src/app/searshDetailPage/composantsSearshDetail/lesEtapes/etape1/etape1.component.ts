import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendrierService } from 'src/app/services/calendrier/calendrier.service';
import { Etape1Service } from 'src/app/services/etape1/etape1.service';
import { SeanceService } from 'src/app/services/serviceSeance/seance.service';

@Component({
  selector: 'app-etape1',
  templateUrl: './etape1.component.html',
  styleUrls: ['./etape1.component.css']
})
export class Etape1Component implements OnInit {
  seance: any[] = []
  jour:string=""
  nomActivite:string=""
  id!:number
  ngOnInit(): void {
    this.getSeance()
  }
  constructor(private seanceService: SeanceService, private etape1Service: Etape1Service, private calendrierService: CalendrierService,private activatedRoute: ActivatedRoute) { }
  currentSection: string = 'etape1';

  navigateTo(section: string) {
    this.currentSection = section;
  }

  getSeance() {
    this.nomActivite=String(this.activatedRoute.snapshot.paramMap.get('activite'))
    this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.calendrierService.donnerCalendrier$.subscribe((jour)=>{
      this.jour=jour
    try {
      this.seanceService.getSeanceByJourAndStadeAndActivite(this.jour, this.id,this.nomActivite).subscribe((resultData: any) => {
        this.seance = resultData
      });
    } catch (error) {
      console.log(error)
    }
  })
  }
  getDonnerSeanceSelect(data: any) {
    this.etape1Service.setData(data)
  }

}
