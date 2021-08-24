import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patient-trace',
  templateUrl: './patient-trace.component.html',
  styleUrls: ['./patient-trace.component.css']
})
export class PatientTraceComponent implements OnInit {
  @Output() setPageName: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.setPageName.emit("Patients");
  }

}
