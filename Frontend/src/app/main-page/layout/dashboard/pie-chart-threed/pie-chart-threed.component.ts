import { Component, OnInit } from '@angular/core';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';
import { AlertService } from 'src/app/helpers/alert.service';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

export interface MyData {
  oil: number;
  protein: number;
  carb: number;
}

@Component({
  selector: 'app-pie-chart-threed',
  templateUrl: './pie-chart-threed.component.html',
  styleUrls: ['./pie-chart-threed.component.css']
})
export class PieChartThreedComponent implements OnInit {
  public chart: any[] = [];
  constructor(private entityService: HttpEntityRepositoryService<EatingActivity>, private authService: AuthService, private alertService: AlertService) {

    entityService.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date=2021-11-15&userId=", authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }
      let chartTitle = ' ';
      if(Data.data.totalCalorie == 0){
        chartTitle = 'Henüz besin alınmamış'
      }else{
        chartTitle = 'Besin Değerlerin'
      }
      console.log(Data)
      this.chart.push({
        title: chartTitle,
        type: ChartType.PieChart,
        columns:  ['Browser', 'Percentage'],
        data: [
          ['Protein (gr)', Data.data.totalProtein],
          ['Carbohydrate (gr)', Data.data.totalCarbohydrate],
          ['Oil (gr)', Data.data.totalOil],
        ],
        options: {
          is3D: true,
          colors: ['#ea3c2b','#c19557', '#f6aa33'],
          backgroundColor: 'transparent',
        }
      })
    })

    
   }

  ngOnInit(): void {
  }

}
