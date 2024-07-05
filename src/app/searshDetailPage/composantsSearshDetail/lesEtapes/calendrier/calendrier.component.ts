import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CalendrierService } from 'src/app/services/calendrier/calendrier.service';
@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css'],
  providers: [DatePipe]
})
export class CalendrierComponent implements OnInit {
  currentDate: Date = new Date();
  currentYear: number = this.currentDate.getFullYear();
  currentMonth: string="";
  day:string=""
  weekDays: { name: string, date: Date }[] = [];

  constructor(private datePipe: DatePipe,private calendrierService:CalendrierService) { }

  ngOnInit(): void {
    this.updateCalendar();
  }

  updateCalendar() {
    this.currentMonth = this.datePipe.transform(this.currentDate, 'MMMM')!;
    this.currentYear = this.currentDate.getFullYear();
    this.updateWeekDays();
  }

  updateWeekDays() {
    const startOfWeek = this.getStartOfWeek(this.currentDate);
    this.weekDays = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      this.weekDays.push({ name: this.datePipe.transform(date, 'EEEE')!, date });
    }
  }

  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust if Sunday
    return new Date(date.setDate(diff));
  }

  previousWeek() {
    this.currentDate.setDate(this.currentDate.getDate() - 7);
    this.updateCalendar();
  }

  nextWeek() {
    this.currentDate.setDate(this.currentDate.getDate() + 7);
    this.updateCalendar();
  }
  getDay(day:string){
    this.calendrierService.setData(day)
  }
  // isActive(date: Date): boolean {
  //   return this.currentDate.toDateString() === date.toDateString();
  // }
}
