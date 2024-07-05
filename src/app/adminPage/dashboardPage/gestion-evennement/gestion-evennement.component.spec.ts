import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEvennementComponent } from './gestion-evennement.component';

describe('GestionEvennementComponent', () => {
  let component: GestionEvennementComponent;
  let fixture: ComponentFixture<GestionEvennementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEvennementComponent]
    });
    fixture = TestBed.createComponent(GestionEvennementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
