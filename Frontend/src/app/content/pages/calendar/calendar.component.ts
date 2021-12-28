import { Component } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
  EventInput,
} from '@fullcalendar/angular';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { CalendarEvent } from 'src/app/models/data/calendar-event.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  addEvent = false;
  currentEvents: EventApi[] = [];
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: this.getInitalsEvents(), // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    firstDay: 1,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  public selectInfo;
  handleDateSelect(selectInfo: DateSelectArg) {
    this.selectInfo = selectInfo;
    this.addEvent = true;
  }

  constructor(
    private confirmationService: ConfirmationService,
    private entityService: HttpEntityRepositoryService<CalendarEvent>,
    private messageService: MessageService,
    private authService: AuthService
  ) {}
  getInitalsEvents() {
    let initalsEvents: EventInput[] = [];

    this.entityService.get("​/api/Schedule/GetByUserId?userId=", this.authService.CurrentUserId).subscribe(data => {       // GETALL yapılan yer.........
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      initalsEvents = Data.data;
      return initalsEvents;
    });





    // initalsEvents = [
    //   {
    //     title: 'All-day event',
    //     start: new Date().toISOString().replace(/T.*$/, ''),
    //   },
    //   {
    //     title: 'Timed event',
    //     start: new Date().toISOString().replace(/T.*$/, '') + 'T12:00:00',
    //   },
    //   {
    //     title: 'Third Event',
    //     start: new Date().toISOString().replace(/T.*$/, '') + 'T12::00',
    //   },
    // ];
    return initalsEvents;
  }
  handleEventClick(clickInfo: EventClickArg) {
    // if (
    //   confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }

    // FOR DELETING
    var id: number = +clickInfo.event.id;
    this.confirmationService.confirm({
      message:
        'Are you sure, you want to remove a event: ' + clickInfo.event.title,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.entityService.delete('/api/Schedule?id=', id).subscribe(
          (data) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'The event was deleted successfully.',
            });
          },
          (err) => {
            if (err)
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'An error occurred during the deletion process.',
              });
          }
        );
      },
      reject: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Unsuccess',
          detail: 'The event was not deleted.',
        });
      },
    });
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
}
