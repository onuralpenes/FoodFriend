import { Component } from '@angular/core';
import { CALORIE_DATA } from './data';

import { AlertService } from 'src/app/helpers/alert.service';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
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
    entityService.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date=2021-11-15&userId=", 48).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      this.cal = Data.data.totalCalorie;
      this.tit = this.cal.toString() + " calorie";
      this.left = this.tot - this.cal;
      this.per = (100 * this.cal) / this.tot;
      this.sub = "You can eat " + this.left.toString() + " calorie";
      if(this.left <= 0){
        this.left = 0;
        this.color = '#b10f0f';
        this.tit = this.cal + "cal/" + this.tot +"cal";
        this.sub = "Yeterli kalori alındı";
      }
      console.log(Data)
    })
  }
}
