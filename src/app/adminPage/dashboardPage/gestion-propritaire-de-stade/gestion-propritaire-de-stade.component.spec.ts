import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPropritaireDeStadeComponent } from './gestion-propritaire-de-stade.component';

describe('GestionPropritaireDeStadeComponent', () => {
  let component: GestionPropritaireDeStadeComponent;
  let fixture: ComponentFixture<GestionPropritaireDeStadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPropritaireDeStadeComponent]
    });
    fixture = TestBed.createComponent(GestionPropritaireDeStadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
