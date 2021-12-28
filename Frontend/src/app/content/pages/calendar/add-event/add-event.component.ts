import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CalendarEvent } from 'src/app/models/data/calendar-event.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { CalendarComponent } from '../calendar.component';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent {
  calendarForm!: FormGroup;
  multiple: boolean = false;
  constructor(
    formBuilder: FormBuilder,
    private calendar: CalendarComponent,
    private entityService: HttpEntityRepositoryService<CalendarEvent>,
    private messageService: MessageService,
    private authService: AuthService
  ) {

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


        if (this.calendarForm.value.end != null) {
          let event:CalendarEvent = {
            scheduleId: 0,
            userId: this.authService.CurrentUserId,
            title: this.calendarForm.value.title,
            startDate: this.calendarForm.value.startDate,
            endDate: this.calendarForm.value.endDate
          }
          this.entityService.insert("/api/Schedule/Add", event).subscribe(data => {
            var post: any = data;
            if (!post.success) {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: post.message });
              return;
            }
          });
        }

        else {
          let event:CalendarEvent = {
            scheduleId: 0,
            userId: this.authService.CurrentUserId,
            title: this.calendarForm.value.title,
            startDate: this.calendarForm.value.startDate,
            endDate: this.calendarForm.value.startDate
          }
          this.entityService.insert("/api/Schedule/Add", event).subscribe(data => {
            var post: any = data;
            if (!post.success) {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: post.message });
              return;
            }
          });
        }


    }
  }
}
