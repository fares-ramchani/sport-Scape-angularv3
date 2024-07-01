import { Component } from '@angular/core';

@Component({
  selector: 'app-searsh-detail',
  templateUrl: './searsh-detail.component.html',
  styleUrls: ['./searsh-detail.component.css']
})
export class SearshDetailComponent {
  scrollVers(){
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });
  }
}
