import { Component } from '@angular/core';
import { ServiceActiviteService } from 'src/app/services/serviceActivite/service-activite.service';

@Component({
  selector: 'app-gestion-activite',
  templateUrl: './gestion-activite.component.html',
  styleUrls: ['./gestion-activite.component.css']
})
export class GestionActiviteComponent {
  Activite: Array<any> = [];
  page: number = 1
  count: number = 0
  cardSize: number = 3
  filterTable:number=0
  constructor(private ServiceActiviteService:ServiceActiviteService){}

  ngOnInit() {

   this.getToutLesstade() 
    

  }
  onCardDataChange(event: any) {
    this.page = event;
   
  }
  getToutLesstade(){
    this.ServiceActiviteService.getToutActivite().subscribe({
      next: data => {
        this.Activite = data
     
     
      }
    })
  }
    searchText=""
}
