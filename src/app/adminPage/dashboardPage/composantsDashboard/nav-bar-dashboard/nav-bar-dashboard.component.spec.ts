import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDashboardComponent } from './nav-bar-dashboard.component';

describe('NavBarDashboardComponent', () => {
  let component: NavBarDashboardComponent;
  let fixture: ComponentFixture<NavBarDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarDashboardComponent]
    });
    fixture = TestBed.createComponent(NavBarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
