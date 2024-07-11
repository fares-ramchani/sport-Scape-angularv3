import { NgModule } from '@angular/core';

import { AccueilComponent } from './AccueilPage/accueil/accueil.component';
import { ContactComponent } from './contactPage/contact/contact.component';
import { LoginComponent } from './loginPage/login/login.component';
import { PartenaireComponent } from './partenairePage/partenaire/partenaire.component';
import { Etape1Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape1/etape1.component';
import { Etape2Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape2/etape2.component';
import { Etape3Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape3/etape3.component';
import { SearshDetailComponent } from './searshDetailPage/searsh-detail/searsh-detail.component';
import { SearshComponent } from './searshPage/searsh/searsh.component';
import { SinupComponent } from './sinupPage/sinup/sinup.component';
import { SportEntrepriseComponent } from './sportEntreprisePage/sport-entreprise/sport-entreprise.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './adminPage/dashboardPage/dashboard/dashboard.component';
import { GestionPropritaireDeStadeComponent } from './adminPage/dashboardPage/gestion-propritaire-de-stade/gestion-propritaire-de-stade.component';
import { GestionDeStadeComponent } from './adminPage/dashboardPage/gestion-de-stade/gestion-de-stade.component';
import { GestionActiviteComponent } from './adminPage/dashboardPage/gestion-activite/gestion-activite.component';
import { GestionEvennementComponent } from './adminPage/dashboardPage/gestion-evennement/gestion-evennement.component';
import { AuthGuard } from './guards/guard-authentification.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'sportEntreprise', component: SportEntrepriseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sinup', component: SinupComponent },
  { path: 'partenaire', component: PartenaireComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'search/list/:ville/:activite', component: SearshComponent },
  { path: 'etape1', component: Etape1Component },
  { path: 'etape3', component: Etape3Component },
  { path: 'etape2', component: Etape2Component },
  {
    path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [{ path: 'GestionPropritaireDeStade', component: GestionPropritaireDeStadeComponent },
    { path: 'GestionDeStade', component: GestionDeStadeComponent },
    { path: 'GestionActivite', component: GestionActiviteComponent },
    { path: 'GestionEvennement', component: GestionEvennementComponent }
    ]
  },
  { path: 'search/detail/:id/:activite', component: SearshDetailComponent },
  { path: '', component: AccueilComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }