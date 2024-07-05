import { Component } from '@angular/core';
import { ServiceStadeService } from 'src/app/services/servicestade/service-stade.service';

@Component({
  selector: 'app-gestion-de-stade',
  templateUrl: './gestion-de-stade.component.html',
  styleUrls: ['./gestion-de-stade.component.css']
})
export class GestionDeStadeComponent {
  stade: Array<any> = [];
  stadeFootBall: Array<any> = [];
  stadeHandball: Array<any> = [];
  stadeBasketBall: Array<any> = [];
  stadeVolleyball: Array<any> = [];
  stadeSwimming: Array<any> = [];
  nombreDestadel:number=0
  nombreDestadeFootball:number=0
  nombreDestadeHandball:number=0
  nombreDestadeBasketBall:number=0
  nombreDestadeVolleyball:number=0
  nombreDesstadeSwimming:number=0
  page: number = 1
  count: number = 0
  cardSize: number = 4
  filterTable:number=0
  constructor(private ServiceStadeService:ServiceStadeService){}
  ngOnInit() {

    this.getToutLesstade()
    

  }
  getToutLesstade(){
    this.ServiceStadeService.getToutLesStade().subscribe({
      next: data => {
        this.stade = data
        this.nombreDestadel=this.stade.length
        this.filterparActiviteFootBall()
        this.filterparActiviteHandball()
        this.filterparActiviteBasketBall()
         this.filterparActiviteVolleyball()
        this.filterparActiviteSwimmingl()
        this.filterTable=0
     
      }
    })
  }
  onCardDataChange(event: any) {
    this.page = event;
   
  }
  filterparActiviteFootBall(){
    this.filterTable=1
    for (let i = 0; i <  this.stade.length; i++) {
      if (this.stade[i].activite.nomActivite == "football" && !this.stadeFootBall.includes(this.stade[i])) {
        this.stadeFootBall.push(this.stade[i])
      
    }
  }
  this.nombreDestadeFootball= this.stadeFootBall.length
  }
  filterparActiviteHandball(){
    this.filterTable=2
    for (let i = 0; i <  this.stade.length; i++) {
      if (this.stade[i].activite.nomActivite == "Handball" && !this.stadeHandball.includes(this.stade[i])) {
        this.stadeHandball.push(this.stade[i])
      
    }
  }
  this.nombreDestadeHandball= this.stadeHandball.length
  }
  filterparActiviteBasketBall(){
    this.filterTable=3
    for (let i = 0; i <  this.stade.length; i++) {
      if (this.stade[i].activite.nomActivite == "basketBall" && !this.stadeBasketBall.includes(this.stade[i])) {
        this.stadeBasketBall.push(this.stade[i])
      
    }
  }
  this.nombreDestadeBasketBall=this.stadeBasketBall.length
  }
  filterparActiviteVolleyball(){
    this.filterTable=4
    for (let i = 0; i <  this.stade.length; i++) {
      if (this.stade[i].activite.nomActivite == "volleyball" && !this.stadeVolleyball.includes(this.stade[i])) {
        this.stadeVolleyball.push(this.stade[i])
      
    }
  }
  this.nombreDestadeVolleyball=this.stadeVolleyball.length
  }
  filterparActiviteSwimmingl(){
    this.filterTable=5
    for (let i = 0; i <  this.stade.length; i++) {
      if (this.stade[i].activite.nomActivite == "swimming" && !this.stadeSwimming.includes(this.stade[i])) {
        this.stadeSwimming.push(this.stade[i])
      
    }
  }
  this.nombreDesstadeSwimming=this.stadeSwimming.length
  }
  toutStade(){
    this.filterTable=0
  }
  searchText=""

}

