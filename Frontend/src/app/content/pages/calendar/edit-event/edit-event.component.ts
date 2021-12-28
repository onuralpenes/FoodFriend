import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventApi } from '@fullcalendar/angular';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EditEventService } from 'src/app/helpers/edit-event.service';
import { Schedule } from 'src/app/models/data/schedule.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  editEventForm!: FormGroup;
  currentEvents: EventApi[] = [];
  editEvent: any;
  currentEvent: any;


  constructor(private authService: AuthService, private formBuilder: FormBuilder, private confirmationService: ConfirmationService, private editEventService: EditEventService, private entityService: HttpEntityRepositoryService<Schedule>, private messageService: MessageService) {
    this.currentEvent = editEventService.getEventInfo().subscribe(data => {
      this.currentEvent = data;
      console.log(this.currentEvent);

      if (this.currentEvent.end == null) {
        this.editEventForm = this.formBuilder.group({
          'title': new FormControl(this.currentEvent.title),
          'startDate': new FormControl(this.currentEvent.start),
          'endDate': new FormControl('')
        });
      }
      else {
        console.log("d")
        this.editEventForm = this.formBuilder.group({
          'title': new FormControl(this.currentEvent.title),
          'startDate': new FormControl(this.currentEvent.start),
          'endDate': new FormControl(this.currentEvent.end)
        });
      }
    });
  }

  onSubmit() {

    this.confirmationService.confirm({
      message:
        'Are you sure, you want to update a event: ' + this.currentEvent.title,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let title;
        let sDate;
        let eDate;
        if (this.editEventForm.value.title != '') {
          title = this.editEventForm.value.title;
        }
        else {
          title = this.editEvent.title;
        }

        if (this.editEventForm.value.startDate) {
          sDate = this.editEventForm.value.startDate;
        }
        else {
          sDate = this.editEvent.startDate;
        }

        if (this.editEventForm.value.endDate) {
          eDate = this.editEventForm.value.endDate;
        }
        else {
          eDate = this.editEvent.endDate;
        }

        let editedEvent: Schedule = {
          scheduleId: this.currentEvent.id,
          title: title,
          startDate: sDate,
          endDate: eDate,
          userId: this.authService.CurrentUserId
        }

        this.entityService.update("/api/Schedule/Update", editedEvent).subscribe(data => {
          var Data: any = data;
          if (!Data.success) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Event could not be updated.' });
            return;
          }
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Event has been updated.' });
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Unsuccess',
          detail: 'The event was not updated.',
        });
      },
    });
  }
}
