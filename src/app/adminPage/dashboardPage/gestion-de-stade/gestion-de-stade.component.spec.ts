import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeStadeComponent } from './gestion-de-stade.component';

describe('GestionDeStadeComponent', () => {
  let component: GestionDeStadeComponent;
  let fixture: ComponentFixture<GestionDeStadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDeStadeComponent]
    });
    fixture = TestBed.createComponent(GestionDeStadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
