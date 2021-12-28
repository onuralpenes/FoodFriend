import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditEventService {

  constructor() { }

  private editEvent = new BehaviorSubject<any>({
    id: 0,
    title: 0,
    start: new Date(),
    end: new Date(),
  });

  setEventInfo(event: any) {
    this.editEvent.next(event);
  }

  getEventInfo() {
    return this.editEvent.asObservable();
  }
}
