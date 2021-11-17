import { Component } from '@angular/core';
import { CALORIE_DATA } from './data';

import { AlertService } from 'src/app/helpers/alert.service';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-consumed-calorie',
  templateUrl: './consumed-calorie.component.html',
  styleUrls: ['./consumed-calorie.component.css']
})
export class ConsumedCalorieComponent {

  color = '#b10f0f';
  tot = CALORIE_DATA.total;
  cal = 0;
  per = 0;
  left = 0;
  unit = "";
  tit = "";
  sub = "";

  constructor(private entityService: HttpEntityRepositoryService<EatingActivity>, private authService: AuthService, private alertService: AlertService){
    const datepipe: DatePipe = new DatePipe('en-US');
    let date = datepipe.transform(new Date(new Date().setDate(new Date().getDate())), 'YYYY-MM-dd'); 
    entityService.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date="+date+"&userId=", authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      if(Data.data.totalCalorie == 0){
        this.tit = "Henüz besin alınmamış"
        this.sub = "Verilerini görmek için beslen"
      }else{
      this.cal = Data.data.totalCalorie;
      this.tit = this.cal.toString() + " calorie";
      this.left = this.tot - this.cal;
      this.per = (100 * this.cal) / this.tot;
      this.sub = "You can eat " + this.left.toString() + " calorie";
      this.color = '#00db93'
      if(this.left <= 0){
        this.left = 0;
        this.color = '#b10f0f';
        this.tit = this.cal + "cal/" + this.tot +"cal";
        this.sub = "Yeterli kalori alındı";
      }
      }
      console.log(Data)
    })
  }
}
