import { Component } from '@angular/core';
import { ServiceEvennementService } from 'src/app/services/serviceEvennement/service-evennement.service';
import {Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-gestion-evennement',
  templateUrl: './gestion-evennement.component.html',
  styleUrls: ['./gestion-evennement.component.css']
})
export class GestionEvennementComponent {
  Evennement: Array<any> = [];
  nomreDesEvennementRefuser: Array<any> = [];
  nomreDesEvennementAccepter: Array<any> = [];
  nomreDesEvennementNonTraiter: Array<any> = [];
  nomreDesEvennementNonPayer: Array<any> = [];
  nomreDesEvennementPayer: Array<any> = [];
  page: number = 1
  count: number = 0
  cardSize: number = 3
  filterTable:number=0
  constructor(private ServiceEvennementService:ServiceEvennementService){}
  ngOnInit() {

    this.getToutEvennement()
  
    
    
    

  }
  getToutEvennement(){
    this.ServiceEvennementService.getToutEvennement().subscribe({
      next: data => {
        this.Evennement = data
        this.nomberedesEvennementRefuser()
        this.nomberedesEvennementAccepter()
        this.nomberedesEvennementNonTraiter()
        this.nomberedesEvennementNonPayer()
        this.nomberedesEvennementPayer()
        this.myGraphiqueEtatEvennement(this.nomreDesEvennementAccepter.length,this.nomreDesEvennementRefuser.length
          ,this.nomreDesEvennementNonTraiter.length,this.Evennement.length)
          this.myGraphiqueesPayer(this.nomreDesEvennementNonPayer.length,this.nomreDesEvennementPayer.length,this.Evennement.length)
      }
    })
  }
  onCardDataChange(event: any) {
    this.page = event;
   
  }
  myGraphiqueEtatEvennement(nomberAccepter:number,nombreRefuser:number,nombreNonTraiter:number,Total:number){
    const ctx =  new Chart("ctx1", {
      type: 'doughnut',
      data: {
        labels: ['REFUSER',"ACCEPTER","NON_TRAITER"],
        datasets: [{
          label: '%',
          data: [nombreRefuser/Total*100, nomberAccepter/Total*100,nombreNonTraiter/Total*100],
          backgroundColor: [
            'red',
            'green',
            'Blue',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive:true,
            plugins: {
          legend: {
            position: 'top',
          }
        },
        
        scales: {
          y: {
            beginAtZero: true
          }
        }
        
      }
    });
  }
  myGraphiqueesPayer(nomberNonPayer:number,nombrePayer:number,total:number){
    const ctx =  new Chart("ctx2", {
      type: 'doughnut',
      data: {
        labels: ['Non Payer', 'Payer'],
        datasets: [{
          label: '%',
          data: [nomberNonPayer/total*100, nombrePayer/total*100,],
          backgroundColor: [
            'red',
            'green',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive:true,
            plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
        
      }
    });
  }
  nomberedesEvennementRefuser(){
    for (let i = 0; i <  this.Evennement.length; i++) {
      if (this.Evennement[i].etatEvenement == "ACCEPTER" && !this.nomreDesEvennementRefuser.includes(this.Evennement[i])) {
        this.nomreDesEvennementRefuser.push(this.Evennement[i])
      
    }
  }
}

nomberedesEvennementAccepter(){
  for (let i = 0; i <  this.Evennement.length; i++) {
    if (this.Evennement[i].etatEvenement == "NON_TRAITER" && !this.nomreDesEvennementAccepter.includes(this.Evennement[i])) {
      this.nomreDesEvennementAccepter.push(this.Evennement[i])
    
  }
}
}
nomberedesEvennementNonTraiter(){
  for (let i = 0; i <  this.Evennement.length; i++) {
    if (this.Evennement[i].etatEvenement == "REFUSER" && !this.nomreDesEvennementNonTraiter.includes(this.Evennement[i])) {
      this.nomreDesEvennementNonTraiter.push(this.Evennement[i])
    
  }
}
}
nomberedesEvennementNonPayer(){
  for (let i = 0; i <  this.Evennement.length; i++) {
    if (this.Evennement[i].estPayer == "NON" && !this.nomreDesEvennementNonPayer.includes(this.Evennement[i])) {
      this.nomreDesEvennementNonPayer.push(this.Evennement[i])
    
  }
}
}
nomberedesEvennementPayer(){
  for (let i = 0; i <  this.Evennement.length; i++) {
    if (this.Evennement[i].estPayer == "OUI" && !this.nomreDesEvennementPayer.includes(this.Evennement[i])) {
      this.nomreDesEvennementPayer.push(this.Evennement[i])
    
  }
}
}
  searchText=""
}
