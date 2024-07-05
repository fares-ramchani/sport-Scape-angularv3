import { Component } from '@angular/core';
import { ServicepropritaireDeStadeService } from 'src/app/services/servicepropritaireDeStade/servicepropritaire-de-stade.service';

@Component({
  selector: 'app-gestion-propritaire-de-stade',
  templateUrl: './gestion-propritaire-de-stade.component.html',
  styleUrls: ['./gestion-propritaire-de-stade.component.css']
})
export class GestionPropritaireDeStadeComponent {
  page: number = 1
  count: number = 0
  cardSize: number = 3
  propritaires: Array<any> = [];
  nombreDecompteVerifier:any
  nombreDecompteNonVerifier:any
  nombreDecompte:any
  filterTable:number=0
  propritaireVerifier:Array<any> = [];
  propritaireNonVerifier:Array<any> = [];
  constructor(private ServicepropritaireDeStadeService:ServicepropritaireDeStadeService){}
  ngOnInit() {
    this.listePropritaires()
    this.nombreDecompteNonVerifier1()
    this.nombreDecompteVerifier1()


  }
  listePropritaires() {
    this.ServicepropritaireDeStadeService.getToutPropritaireDeStade().subscribe({
      next: data => {
        this.propritaires = data
        this.nombreDecompte=this.propritaires.length
     
      }
    })
  }
  nombreDecompteVerifier1() {
    this.ServicepropritaireDeStadeService.nombreDecompteVerifier().subscribe({
      next: data => {
        this.nombreDecompteVerifier = data
      }
    })
  }
  nombreDecompteNonVerifier1() {
    this.ServicepropritaireDeStadeService.nombreDecompteNonVerifier().subscribe({
      next: data => {
        this.nombreDecompteNonVerifier = data
      }
    })
  }
  tablecompteVerifier(){
    this.filterTable=1
    for (let i = 0; i <  this.propritaires.length; i++) {
      if (this.propritaires[i].compteVerifier == true && !this.propritaireVerifier.includes(this.propritaires[i])) {
        this.propritaireVerifier.push(this.propritaires[i])
      
    }
  }
}
  tablecompteNonVerifier(){
    this.filterTable=2
    for (let i = 0; i <  this.propritaires.length; i++) {
      if (this.propritaires[i].compteVerifier == false && !this.propritaireNonVerifier.includes(this.propritaires[i])) {
        this.propritaireNonVerifier.push(this.propritaires[i])
      
    }
  }
  }
  tablecompte(){
    this.filterTable=0
  }
  onCardDataChange(event: any) {
    this.page = event;
   
  }
  getlogoentreprise(id: any): string|null  {
    for (let i = 0; i < this.propritaires.length; i++) {
      if (this.propritaires[i].idPropritaire == id) {
        return 'data:image/jpeg;base64,' + this.propritaires[i].photoPropritaire
      }
    }
    return null
  }
    searchText=""
}
