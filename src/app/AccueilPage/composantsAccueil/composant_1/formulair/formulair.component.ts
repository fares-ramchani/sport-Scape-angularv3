import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from 'src/app/models/activite/activite.model';
import { Stade } from 'src/app/models/stade/stade';
import { ActiviteService } from 'src/app/services/activite/activite.service';
import { ServiceStadeService } from 'src/app/services/servicestade/service-stade.service';

@Component({
  selector: 'app-formulair',
  templateUrl: './formulair.component.html',
  styleUrls: ['./formulair.component.css']
})
export class FormulairComponent implements OnInit {
  activities: any[] = [];
  stades: Stade[] = [];
  ToutLesStade: Stade[] = [];
  ville:string|any=""
  activite:string|any=""
  selectedActivite: string | null = null;
  selectedVille: string | null = null;
  public formulaireaccueilForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder, private activiteService:ActiviteService,private router:Router, private serviceStadeService:ServiceStadeService) {}

  ngOnInit() {
    this.ville = this.activatedRoute.snapshot.paramMap.get('ville');
    this.activite = this.activatedRoute.snapshot.paramMap.get('activite');
    this.getAllActivities()
    this.getToutLesStade()
    //this.getStadeByVilleAndActivite(this.ville,this.activite)
    this.formulaireaccueilForm = this.formBuilder.group({
      Gouvernorat: this.formBuilder.control('', [
        Validators.required,
      ]),
      Activite: this.formBuilder.control('', [
        Validators.required,
      ]),
     
    });
  }
  getErrorsMessage(fieldName: string, error: any): string {
    if (error['required']) {
      return fieldName + ' obligatoire';
    }
    return '';
  }
  //consommation des apis
  getAllActivities(){
    try {
      this.activiteService.getAllActivities().subscribe((resultData: any) => {
        this.activities = resultData
        console.log("mes activities" + this.activities)
      });
    }catch(error) {
      console.log(error)
    }
  }
  onActiviteChange(event: Event){
    const target = event.target as HTMLSelectElement;
    this.selectedActivite = target.value;
  }
  onVilleChange(event: Event){
    const target = event.target as HTMLSelectElement;
    this.selectedVille = target.value;
  }
/*  getStadeByVilleAndActivite(ville:string,nomActivite:string){
    try {
      this.serviceStadeService.getStadeByVilleAndActivite(ville,nomActivite).subscribe((resultData: any) => {
        this.stades = resultData
        console.log("mes stades" + this.stades)
      });
    }catch(error) {
      console.log(error)
    }
  }*/
  getToutLesStade(){
    try {
      this.serviceStadeService.getToutLesStade().subscribe((resultData: any) => {
        this.ToutLesStade = resultData
        console.log("mes stades" + this.stades)
      });
    }catch(error) {
      console.log(error)
    }
  }
  search(){
    this.router.navigate(['/search/list',this.selectedVille,this.selectedActivite]);
  }
}
