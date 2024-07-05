import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceStadeService } from 'src/app/services/servicestade/service-stade.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit{
  detailStade: any[] = []
  ville:string=""
  activite:string=""
  idStade!:number

  center: google.maps.LatLngLiteral = { lat:33.8193879, lng: 10.8448079 }; 
  zoom = 13;
  constructor(private router:Router,private serviseStade:ServiceStadeService,private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
this.getStadeByVilleAndActivite()
  }
  reserver(idStade:number,activite:string){
    this.router.navigate(['/search/detail',idStade,activite]);
  }
  getStadeByVilleAndActivite(){
    this.ville = String(this.activatedRoute.snapshot.paramMap.get('ville'));
    this.activite = String(this.activatedRoute.snapshot.paramMap.get('activite'));
    try {
      this.serviseStade.getStadeByVilleAndActivite(this.ville,this.activite).subscribe((resultData: any) => {
        this.detailStade = resultData
      });
    }catch(error) {
      console.log(error)
    }

  }
 
}
