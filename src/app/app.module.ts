import {
  CUSTOM_ELEMENTS_SCHEMA,
  LOCALE_ID,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Import components
import { AccueilComponent } from './AccueilPage/accueil/accueil.component';
import { CarouselComponent } from './AccueilPage/composantsAccueil/composant_1/carousel/carousel.component';
import { Composant1Component } from './AccueilPage/composantsAccueil/composant_1/composant1/composant1.component';
import { FormulairComponent } from './AccueilPage/composantsAccueil/composant_1/formulair/formulair.component';
import { CarouselComp2Component } from './AccueilPage/composantsAccueil/composant_2/carousel-comp2/carousel-comp2.component';
import { Composant2Component } from './AccueilPage/composantsAccueil/composant_2/composant2/composant2.component';
import { CarouselActivitesComponent } from './AccueilPage/composantsAccueil/composant_3/carousel-activites/carousel-activites.component';
import { CarouselevenementsComponent } from './AccueilPage/composantsAccueil/composant_3/carousel-evenements/carouselevenements.component';
import { Composant3Component } from './AccueilPage/composantsAccueil/composant_3/composant3/composant3.component';
import { Composant4Component } from './AccueilPage/composantsAccueil/composant_4/composant4/composant4.component';
import { Composant5Component } from './AccueilPage/composantsAccueil/composant_5/composant5/composant5.component';
import { Composant6Component } from './AccueilPage/composantsAccueil/composant_6/composant6/composant6.component';
import { ComposantspartenaireComponent } from './AccueilPage/composantsAccueil/composant_6/composantspartenaire/composantspartenaire.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './composants/footer/footer.component';

import { ContactComponent } from './contactPage/contact/contact.component';
import { LoginComponent } from './loginPage/login/login.component';
import { Composant1partenaireComponent } from './partenairePage/composantpartenairePage/composant1partenaire/composant1partenaire.component';
import { Composant2partenaireComponent } from './partenairePage/composantpartenairePage/composant2partenaire/composant2partenaire.component';
import { PartenaireComponent } from './partenairePage/partenaire/partenaire.component';
import { Etape1Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape1/etape1.component';
import { Etape2Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape2/etape2.component';
import { Etape3Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape3/etape3.component';
import { Section1Component } from './searshDetailPage/composantsSearshDetail/section1/section1.component';
import { Section2Component } from './searshDetailPage/composantsSearshDetail/section2/section2.component';
import { Section3Component } from './searshDetailPage/composantsSearshDetail/section3/section3.component';
import { SearshDetailComponent } from './searshDetailPage/searsh-detail/searsh-detail.component';
import { Part1Component } from './searshPage/composantsSearsh/part1/part1.component';
import { Part2Component } from './searshPage/composantsSearsh/part2/part2.component';
import { SearshComponent } from './searshPage/searsh/searsh.component';
import { SinupComponent } from './sinupPage/sinup/sinup.component';
import { SportEntrepriseComponent } from './sportEntreprisePage/sport-entreprise/sport-entreprise.component';
import { SportEntreprisecomposant1Component } from './sportEntreprisePage/sport-entreprisecomposant1/sport-entreprisecomposant1.component';
import { SportEntreprisecomposant2Component } from './sportEntreprisePage/sport-entreprisecomposant2/sport-entreprisecomposant2.component';
import { FleshTopComponent } from './flesh-top/flesh-top.component';
import { CalendrierComponent } from './searshDetailPage/composantsSearshDetail/lesEtapes/calendrier/calendrier.component';
import { MapComponent } from './map/map.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DashboardComponent } from './adminPage/dashboardPage/dashboard/dashboard.component';
import { NavBarDashboardComponent } from './adminPage/dashboardPage/composantsDashboard/nav-bar-dashboard/nav-bar-dashboard.component';
import { SideBarDashboardComponent } from './adminPage/dashboardPage/composantsDashboard/side-bar-dashboard/side-bar-dashboard.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { GestionDePartenaireComponent } from './adminPage/dashboardPage/gestion-de-partenaire/gestion-de-partenaire.component';
import { GestionPropritaireDeStadeComponent } from './adminPage/dashboardPage/gestion-propritaire-de-stade/gestion-propritaire-de-stade.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPropritairePipe } from './pipes/searchs/gestionPropritaireDeStade/search-propritaire.pipe';
import { GestionDeStadeComponent } from './adminPage/dashboardPage/gestion-de-stade/gestion-de-stade.component';
import { GestionActiviteComponent } from './adminPage/dashboardPage/gestion-activite/gestion-activite.component';
import { GestionEvennementComponent } from './adminPage/dashboardPage/gestion-evennement/gestion-evennement.component';
import { AppHttpInterceptor } from './interceptor/app-http.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    CarouselComp2Component,
    AppComponent,
    AccueilComponent,
    CarouselComponent,
    Composant1Component,
    FormulairComponent,
    Composant2Component,
    CarouselActivitesComponent,
    CarouselevenementsComponent,
    Composant3Component,
    Composant4Component,
    Composant5Component,
    Composant6Component,
    NavbarComponent,
    ComposantspartenaireComponent,
    LoginComponent,
    SinupComponent,
    ContactComponent,
    SportEntrepriseComponent,
    SportEntreprisecomposant2Component,
    SportEntreprisecomposant1Component,
    PartenaireComponent,
    Composant1partenaireComponent,
    Composant2partenaireComponent,
    FooterComponent,
    SearshComponent,
    Part1Component,
    Part2Component,
    SearshDetailComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Etape1Component,
    Etape2Component,
    Etape3Component,
    FleshTopComponent,
    CalendrierComponent,
    MapComponent,
    DashboardComponent,
    NavBarDashboardComponent,
    SideBarDashboardComponent,
    GestionDePartenaireComponent,
    GestionPropritaireDeStadeComponent,
    SearchPropritairePipe,
    GestionDeStadeComponent,
    GestionActiviteComponent,
    GestionEvennementComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot({timeOut:4000,
      progressBar:true,progressAnimation:'increasing'}
    
    ),
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' },{provide:HTTP_INTERCEPTORS,useClass:AppHttpInterceptor,multi:true}],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
