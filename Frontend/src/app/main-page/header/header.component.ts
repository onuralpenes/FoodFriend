import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Notify, NOTIFY_DATA } from './notify-data';
import { NotifyComponent } from './notify/notify.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggle: EventEmitter<any> = new EventEmitter(); //Required for connection with sidebar.

  constructor(private authService: AuthService, private router: Router, private modal: MatDialog) { }
  notificationList : Notify[] = NOTIFY_DATA;
  pageName;

  ngOnInit() {
    this.pageName = this.router.url.substring(1).toUpperCase();
    if (this.pageName.includes('/')) {
      this.pageName = this.pageName.substring(0, this.pageName.indexOf('/'));
    }
    if(this.pageName.includes('-')){
      this.pageName = this.pageName.substring(0, this.pageName.indexOf('-')) + " " + this.pageName.substring(this.pageName.indexOf('-') + 1, this.pageName.lenght) 
    }



    this.router.events.subscribe((val) => {
      this.pageName = this.router.url.substring(1).toUpperCase();

      if (this.pageName.includes('/')) {
        this.pageName = this.pageName.substring(0, this.pageName.indexOf('/'));
      }
      if(this.pageName.includes('-')){
        this.pageName = this.pageName.substring(0, this.pageName.indexOf('-')) + " " + this.pageName.substring(this.pageName.indexOf('-') + 1, this.pageName.lenght) 
      }
    });
  }

  emit() {
    this.toggle.emit(null); //Required for connection with sidebar.
  }

  logout() {
    this.authService.logout();
  }

  profile() {
    this.router.navigateByUrl('/profile');
  }

  settings() {
    this.router.navigateByUrl('/settings');
  }

  openNot(id: number){
    this.modal.open(NotifyComponent, {data: {id: id}});
  }

}
