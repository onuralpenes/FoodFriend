import { Component } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/angular';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { AuthService } from 'src/app/services/auth.service';
import { Schedule } from 'src/app/models/data/schedule.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditEventService } from 'src/app/helpers/edit-event.service';
import trLocale from '@fullcalendar/core/locales/tr';
import enLocale from '@fullcalendar/core/locales/en-gb';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  eventForm!: FormGroup;
  editEventForm!: FormGroup;
  addEvent = false;
  eventDetails = false;
  loaded = false;
  updateEventBool = false;
  currentEvents: EventApi[] = [];
  calendarVisible = false;
  localeTr: any = trLocale;
  localeEn: any = enLocale;
  calendarOptions: CalendarOptions = {

    locale: this.schedularLanguage(),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: this.getInitalsEvents(), // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: false,
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

  schedularLanguage() {
    let browserLang = this.translate.currentLang;
    if (browserLang = 'en'){
      return this.localeEn
    } else {
      return this.localeTr
    }
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  public selectInfo;
  public startingDate;
  handleDateSelect(selectInfo: DateSelectArg) {
    this.selectInfo = selectInfo;
    this.startingDate = selectInfo.start;
    console.log("start date =>>>>" + this.startingDate)
    this.addEvent = true;
  }

  constructor(private translate: TranslateService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder, private editEventService: EditEventService, private entityService: HttpEntityRepositoryService<Schedule>, private messageService: MessageService, private authService: AuthService) { }

  getInitalsEvents() {
    let initalsEvents: EventInput[] = [];
    this.entityService.get("???/api/Schedule/GetByUserId?userId=", this.authService.CurrentUserId).subscribe(data => {       // GETALL yap??lan yer.........
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return initalsEvents;
      }
      for (let i = 0; i < Data.data.length; i++) {
        var event: EventInput = {
          id: Data.data[i].scheduleId,
          title: Data.data[i].title,
          start: Data.data[i].startDate,
          end: Data.data[i].endDate
        }
        initalsEvents.push(event);
      }
      this.loaded = true;
      this.handleCalendarToggle();
      console.log(initalsEvents);
      return initalsEvents;
    });
    return initalsEvents;
  }

  handleEventClick(clickInfo: EventClickArg) {
    this.clickInfo = clickInfo;
    this.eventDetails = true;
  }

  clickInfo;

  updateEvent() {
    let editEventTemp = {
      id: this.clickInfo.event.id,
      title: this.clickInfo.event.title,
      start: this.clickInfo.event.start,
      end: this.clickInfo.event.end,
    };
    this.editEventService.setEventInfo(editEventTemp);
    this.updateEventBool = true;
    this.eventDetails = false;
  }

  deleteEvent() {
    this.confirmationService.confirm({
      message:
        'Are you sure, you want to remove a event: ' + this.clickInfo.event.title,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.entityService.delete('/api/Schedule?id=', +this.clickInfo.event.id).subscribe(
          (data) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'The event was deleted successfully.',
            });
            location.reload();
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
    this.eventDetails = false;
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
}
