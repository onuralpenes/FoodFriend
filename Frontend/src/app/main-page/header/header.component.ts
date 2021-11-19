import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Notify, NOTIFY_DATA } from './notify-data';
import { AlertService } from 'src/app/helpers/alert.service';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggle: EventEmitter<any> = new EventEmitter(); //Required for connection with sidebar.

  constructor(private authService: AuthService, private router: Router, private entityService: HttpEntityRepositoryService<EatingActivity>, private alertService: AlertService) {
    const datepipe: DatePipe = new DatePipe('en-US');
    let date = datepipe.transform(new Date(new Date().setDate(new Date().getDate())), 'YYYY-MM-dd'); 
    entityService.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date="+date+"&userId=", authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      this.notificationList[0].title = Data.data.totalCalorie + " kalori alımı yapıldı";
      if(Data.data.totalCalorie < 2000){
        this.notificationList[0].content = Data.data.totalCalorie + " kalori alımı yaptınız hala "+(2000-Data.data.totalCalorie)+" kalori alımı yapabilirsiniz";
      }else if(Data.data.totalCalorie > 2000){
        this.notificationList[0].content = Data.data.totalCalorie + " kalori alımı yaptınız. Kalori sınırınızı aşıyorsunuz, diyetisyeniniz önerilerini dinleyin ya da aktivite yapın";
      }else{
        this.notificationList[0].content = "Günlük kalori sınırına ulaştınız.";
      }

    })
    if(this.notificationList[0].readed){
      this.notificationNum = 0;
    }else{
      this.notificationNum = 1;
    }
   }
  notificationList : Notify[] = NOTIFY_DATA;
  notificationNum = 1;
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
  title = ""
  context = ""
  notif = false
  openNot(id: number) {
    console.log("geldik" + id);
    let not = this.notificationList.filter(not => not.messageId === id)[0]
    this.title = not.title;
    this.context = not.content;
    this.notif = true
    this.notificationList[0].readed = false;
    not.readed = false;
    this.notificationNum = 0;
    if(this.notificationList[0].readed){
      this.notificationNum = 1;
    }else{
      this.notificationNum = 0;
    }
  }

}
