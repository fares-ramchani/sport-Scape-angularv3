import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stade } from 'src/app/models/stade/stade';
import { ActiviteService } from 'src/app/services/activite/activite.service';
import { SeanceService } from 'src/app/services/serviceSeance/seance.service';
import { ServiceStadeService } from 'src/app/services/servicestade/service-stade.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component  implements OnInit{
  stade: any;
  activite:any
  nomActivite:string=""
  constructor(private seanceService:SeanceService,private serviseStade: ServiceStadeService, private activatedRoute: ActivatedRoute,private activiteService:ActiviteService){}
  ngOnInit(): void {
    this.getDetailStade()
    this.nomActivite=String(this.activatedRoute.snapshot.paramMap.get('activite'))
    this.getActiviteByName()
  }
  center: google.maps.LatLngLiteral = { lat:33.8193879, lng: 10.8448079 }; 
  zoom = 13;
  markers: Array<{ position: google.maps.LatLngLiteral }> = [
    { position: { lat: 40.730610, lng: -73.935242 } },
    { position: { lat: 40.740610, lng: -73.935242 } },
    { position: { lat: 40.750610, lng: -73.935242 } }
  ];

  /*carrousel */
  images: string[] = [
    'assets/images/searshDetail/section1/8324.jpg',
    'assets/images/searshDetail/section1/6158.jpg',
    'assets/images/searshDetail/section1/6159.jpg',
    'assets/images/searshDetail/section1/6161.jpg',
    'assets/images/searshDetail/section1/54436.jpg'
  ];
  isCarouselOpen = false;
  currentIndex = 0;

  openCarousel(index: number) {
    this.currentIndex = index;
    this.isCarouselOpen = true;
  }

  closeCarousel() {
    this.isCarouselOpen = false;
  }

  changeSlide(direction: number) {
    this.currentIndex += direction;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    } else if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
  }
  getDetailStade(){
    let idStade = Number(this.activatedRoute.snapshot.paramMap.get('id'));
   try {
      this.serviseStade.getStadeById(idStade).subscribe((resultData: any) => {
        this.stade = resultData
      });
    }catch(error) {
      console.log(error)
    }
  }
  getActiviteByName(){
   try {
      this.activiteService.getActivitieByName(this.nomActivite).subscribe((resultData: any) => {
        this.activite = resultData
        console.log(this.activite.prix)
      });
    }catch(error) {
      console.log(error)
    }
  }
}
