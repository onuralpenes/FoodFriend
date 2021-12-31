import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { CalendarComponent } from '../calendar.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Schedule } from 'src/app/models/data/schedule.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent {
  calendarForm!: FormGroup;
  multiple: boolean = false;
  startToDate: any;

  constructor(formBuilder: FormBuilder, private calendar: CalendarComponent, private entityService: HttpEntityRepositoryService<Schedule>, private messageService: MessageService, private authService: AuthService) {

    this.calendarForm = formBuilder.group({
      title: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('')
    });
  }



  onSubmit() {

    if (this.calendarForm.valid) {
      this.calendar.selectInfo.view.calendar.addEvent({
        id: 0,
        title: this.calendarForm.value.title,
        start: this.calendarForm.value.startDate,
        end: this.calendarForm.value.endDate
      });
      if (this.calendarForm.value.endDate) {
        let event: Schedule = {
          scheduleId: 0,
          userId: this.authService.CurrentUserId,
          title: this.calendarForm.value.title,
          startDate: this.calendarForm.value.startDate,
          endDate: this.calendarForm.value.endDate
        }
        this.entityService.insert("/api/Schedule/Add", event).subscribe(data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: "Event Successfuly added." });
          return;
        }, err =>
          this.messageService.add({ severity: 'error', summary: 'Error', detail: "Event cannot added" }));
      }
      else {
        let event: Schedule = {
          scheduleId: 0,
          userId: this.authService.CurrentUserId,
          title: this.calendarForm.value.title,
          startDate: this.calendarForm.value.startDate,
          endDate: this.calendarForm.value.startDate
        }
        this.entityService.insert("/api/Schedule/Add", event).subscribe(data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: "Event Successfuly added." });
          return;
        }, err =>
          this.messageService.add({ severity: 'error', summary: 'Error', detail: "Event cannot added" }));
      }
    }
  }
}
