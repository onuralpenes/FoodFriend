import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Output() setPageName: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.setPageName.emit("Activity");
  }
}
