import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DayPilot } from "daypilot-pro-angular";
import { Observable } from "rxjs";

@Injectable()
export class CalendarDataService {

  resources: any[] = [
    { name: 'Group 1', id: 'G1'}
    /*, expanded: true, children: [
        { name: 'Row1', id: 'R1' },
      ]},*/
  ];

  events: any[] = [
    {
      id: '1',
      resource: 'G1',
      start: '2021-09-02',
      end: '2021-09-05',
      text: 'Running',
      barColor: '#990000'
    },
    {
      id: '2',
      resource: 'G1',
      start: '2021-09-06',
      end: '2021-09-09',
      text: 'Swimming',
      barColor: '#b45f06'
    },
    {
      id: '3',
      resource: 'G1',
      start: '2021-09-10',
      end: '2021-09-15',
      text: 'GYM',
      barColor: '#bf9000'
    },
    {
      id: '4',
      resource: 'G1',
      start: '2021-09-03',
      end: '2021-09-06',
      text: 'Eating',
      barColor: '#38761d'
    },
    {
      id: '5',
      resource: 'G1',
      start: '2021-09-07',
      end: '2021-09-29',
      text: 'Travel',
      barColor: '#134f5c'
    },
    {
      id: '6',
      resource: 'G1',
      start: '2021-09-16',
      end: '2021-09-18',
      text: 'Tennis',
      barColor: '#1155cc'
    },
  ];


  constructor(private http: HttpClient) {
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

  getResources(): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.resources);
      }, 200);
    });

    // return this.http.get("/api/resources");
  }

}