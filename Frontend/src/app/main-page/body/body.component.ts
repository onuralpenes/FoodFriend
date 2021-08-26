import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() pin: EventEmitter<any> = new EventEmitter();
  @Input() opened = true;
  @Input() pinButton = false;
  pageName = "Dashboard";
  constructor(private router: Router) {
    console.log(this.router.url)
    if (this.router.url == "/profile") {
      this.pageName = "Profile"
    } else if (this.router.url == "/food") {
      this.pageName = "Food";
    } else if (this.router.url == "/activity") {
      ;
      this.pageName = "Activity";
    } else if (this.router.url == "/patients") {
      this.pageName = "Patients";
    }
    else if (this.router.url == "/expert-profile") {
      this.pageName = "Expert";
    }
  }

  pinSidebar() {
    this.pinButton = !this.pinButton;
    this.pin.emit(this.pinButton);
  }

  setPageName(event: any) {
    this.pageName = event;
  }

  ngOnInit(): void { }
}
