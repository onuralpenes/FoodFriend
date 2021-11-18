import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { AlertService } from 'src/app/helpers/alert.service';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { DatePipe } from '@angular/common';

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
  data: any;

  chartOptions: any;



  public chart: any[] = [];
  constructor(private entityService: HttpEntityRepositoryService<EatingActivity>, private authService: AuthService, private alertService: AlertService) {
    const datepipe: DatePipe = new DatePipe('en-US');
    let date = datepipe.transform(new Date(new Date().setDate(new Date().getDate())), 'YYYY-MM-dd'); 
    entityService.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date="+date+"&userId=", authService.CurrentUserId).subscribe(data => {
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

   ngOnInit() {
    this.data = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };
}


}

