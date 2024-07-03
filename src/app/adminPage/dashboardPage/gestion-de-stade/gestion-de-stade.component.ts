import { Component } from '@angular/core';
import { ServiceStadeService } from 'src/app/services/servicestade/service-stade.service';

@Component({
  selector: 'app-gestion-de-stade',
  templateUrl: './gestion-de-stade.component.html',
  styleUrls: ['./gestion-de-stade.component.css']
})
export class GestionDeStadeComponent {
  stade: Array<any> = [];
  page: number = 1
  count: number = 0
  cardSize: number = 1
  constructor(private ServiceStadeService:ServiceStadeService){}
  ngOnInit() {

    this.getToutLesstade()

  }
  getToutLesstade(){
    this.ServiceStadeService.getToutLesStade().subscribe({
      next: data => {
        this.stade = data
     
      }
    })
  }
  onCardDataChange(event: any) {
    this.page = event;
   
  }
  searchText=""

}

