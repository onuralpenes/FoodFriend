import { Component, DebugElement } from '@angular/core';
import { multi } from './data';

import { AlertService } from 'src/app/helpers/alert.service';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-eating-habit-chart',
  templateUrl: './eating-habit-chart.component.html',
  styleUrls: ['./eating-habit-chart.component.css']
})
export class EatingHabitChartComponent {

  basicData: any;

    basicOptions: any;

    multiAxisData: any;

    chartOptions: any;

    multiAxisOptions: any;

    stackedData: any;

    stackedOptions: any;

    horizontalOptions: any;

  multi!: any[];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Gün';
  yAxisLabel: string = 'Kalori';
  timeline: boolean = true;
  weeklyEatingActivity = [
      0,0,0,0,0,0,0
  ];
  weeklyAvailableCalorie = [
    2000,2000,2000,2000,2000,2000,2000
];
  
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#2196f3', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private entityService: HttpEntityRepositoryService<EatingActivity>, private authService: AuthService, private alertService: AlertService) {
      
        
    this.basicData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Calories Taken',
                backgroundColor: '#42A5F5',
                data: this.weeklyEatingActivity
            },
            {
                label: 'Calories Available',
                backgroundColor: '#FFA726',
                data: this.weeklyAvailableCalorie
            }
        ]
    };
      var date = new Date();
      let reqNum = 0;
      if(date.toString().substring(0,3) == "Mon"){
        reqNum = 1;
      }else if(date.toString().substring(0,3) == "Tue"){
        reqNum = 2;
      }else if(date.toString().substring(0,3) == "Wed"){
        reqNum = 3;
      }
      else if(date.toString().substring(0,3) == "Thu"){
        reqNum = 4;
      }
      else if(date.toString().substring(0,3) == "Fri"){
        reqNum = 5;
      }
      else if(date.toString().substring(0,3) == "Sat"){
        reqNum = 6;
      }
      else if(date.toString().substring(0,3) == "Sun"){
        reqNum = 7;
      }

      console.log(reqNum);
      for(let i = reqNum; i< 7; i++){
        multi[0].series[i].value = 0;
      }

      for(let i = 0 ; i<reqNum; i++){
        const datepipe: DatePipe = new DatePipe('en-US');
        console.log("kaç gün öncesii" +(reqNum-1-i) );
        let date = datepipe.transform(new Date(new Date().setDate(new Date().getDate()-(reqNum-1-i))), 'YYYY-MM-dd'); 
        entityService.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date="+date+"&userId=", authService.CurrentUserId).subscribe(data =>{
        var Data: any = data;
        if (!Data.success) {
          this.alertService.openSnackBar(Data.success, Data.message);
          return;
        }else{
          this.weeklyEatingActivity[i] = Data.data.totalCalorie;
          this.weeklyAvailableCalorie[i] = 2000-Data.data.totalCalorie;
          console.log( i +"==="+ "" + Data.data.totalCalorie + " eee ")
            
          this.updateChartOptions();
        }
      })
      }

      for(let i = 0; i<7; i++){
        const datepipe: DatePipe = new DatePipe('en-US');
        let date = datepipe.transform(new Date(new Date().setDate(new Date().getDate()-(reqNum+6-i))), 'YYYY-MM-dd'); 
        console.log("sadate"+date)
        entityService.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date="+date+"&userId=", authService.CurrentUserId).subscribe(data =>{
        var Data: any = data;
        if (!Data.success) {
          this.alertService.openSnackBar(Data.success, Data.message);
          return;
        }else{
          multi[1].series[i].value = Data.data.totalCalorie;
          
          //console.log("sadate"+date+" ==== " + Data.data.totalCalorie)
        }
      })
      }
      for(let i = 0; i<7; i++){
        const datepipe: DatePipe = new DatePipe('en-US');
        let date = datepipe.transform(new Date(new Date().setDate(new Date().getDate()-(reqNum+6+7-i))), 'YYYY-MM-dd'); 
        console.log("sadate"+date)
        entityService.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date="+date+"&userId=", authService.CurrentUserId).subscribe(data =>{
        var Data: any = data;
        if (!Data.success) {
          this.alertService.openSnackBar(Data.success, Data.message);
          return;
        }else{
          multi[2].series[i].value = Data.data.totalCalorie;
          //console.log("sadate"+date+" ==== " + Data.data.totalCalorie)
          
        }
      })
      }
    //console.log(new Date())
    setTimeout(x =>{
      Object.assign(this, { multi });
    }, 200)
  }

  updateChartOptions() {
    if (false)
        this.applyDarkTheme();
    else
        this.applyLightTheme();
}
applyDarkTheme() {
  this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#1c682d'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#1c682d'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y: {
              ticks: {
                  color: '#1c682d'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          }
      }
  };
}

applyLightTheme() {
  this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
  };

}
  ngOnInit() {
  }
}
