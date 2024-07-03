import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDePartenaireComponent } from './gestion-de-partenaire.component';

describe('GestionDePartenaireComponent', () => {
  let component: GestionDePartenaireComponent;
  let fixture: ComponentFixture<GestionDePartenaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDePartenaireComponent]
    });
    fixture = TestBed.createComponent(GestionDePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
