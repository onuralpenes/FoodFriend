import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  @Output() setPageName: EventEmitter<any> = new EventEmitter()
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    this.setPageName.emit("Dashboard");
  }

}
