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

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#2196f3', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private entityService: HttpEntityRepositoryService<EatingActivity>, private authService: AuthService, private alertService: AlertService) {
    
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
          multi[0].series[i].value = Data.data.totalCalorie;
          console.log("sadate"+date+"  "+ i +"==="+ "" + Data.data.totalCalorie + " eee "+ multi[0].series[i].value)
          
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
          
          console.log("sadate"+date+" ==== " + Data.data.totalCalorie)
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
          console.log("sadate"+date+" ==== " + Data.data.totalCalorie)
          
        }
      })
      }
    //console.log(new Date())
    setTimeout(x =>{
      Object.assign(this, { multi });
    }, 200)
  }

  updateChartOptions() {
    if (true)
        this.applyDarkTheme();
    else
        this.applyLightTheme();
}
applyDarkTheme() {
  this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          }
      }
  };

  this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          }
      }
  };

  this.multiAxisOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          },
          tooltips: {
              mode: 'index',
              intersect: true
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y: {
              type: 'linear',
              display: true,
              position: 'left',
              ticks: {
                  min: 0,
                  max: 100,
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                  drawOnChartArea: false,
                  color: 'rgba(255,255,255,0.2)'
              },
              ticks: {
                  min: 0,
                  max: 100,
                  color: '#ebedef'
              }
          }
      }
  };

  this.stackedOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          },
          tooltips: {
              mode: 'index',
              intersect: false
          }
      },
      scales: {
          x: {
              stacked: true,
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y: {
              stacked: true,
              ticks: {
                  color: '#ebedef'
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

  this.horizontalOptions = {
      indexAxis: 'y',
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

  this.multiAxisOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          },
          tooltips: {
              mode: 'index',
              intersect: true
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
              type: 'linear',
              display: true,
              position: 'left',
              ticks: {
                  min: 0,
                  max: 100,
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                  drawOnChartArea: false,
                  color: '#ebedef'
              },
              ticks: {
                  min: 0,
                  max: 100,
                  color: '#495057'
              }
          }
      }
  };

  this.stackedOptions = {
      plugins: {
          tooltips: {
              mode: 'index',
              intersect: false
          },
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              stacked: true,
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              stacked: true,
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
    this.basicData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#FFA726',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    this.multiAxisData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'Dataset 1',
          backgroundColor: [
              '#EC407A',
              '#AB47BC',
              '#42A5F5',
              '#7E57C2',
              '#66BB6A',
              '#FFCA28',
              '#26A69A'
          ],
          yAxisID: 'y',
          data: [65, 59, 80, 81, 56, 55, 10]
      }, {
          label: 'Dataset 2',
          backgroundColor: '#78909C',
          yAxisID: 'y1',
          data: [28, 48, 40, 19, 86, 27, 90]
      }]
  };
  this.multiAxisOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        },
        tooltips: {
            mode: 'index',
            intersect: true
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
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
                min: 0,
                max: 100,
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
                color: '#ebedef'
            },
            ticks: {
                min: 0,
                max: 100,
                color: '#495057'
            }
        }
    }
};this.horizontalOptions = {
  indexAxis: 'y',
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

this.stackedData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      type: 'bar',
      label: 'Dataset 1',
      backgroundColor: '#42A5F5',
      data: [
          50,
          25,
          12,
          48,
          90,
          76,
          42
      ]
  }, {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: '#66BB6A',
      data: [
          21,
          84,
          24,
          75,
          37,
          65,
          34
      ]
  }, {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: '#FFA726',
      data: [
          41,
          52,
          24,
          74,
          23,
          21,
          32
      ]
  }]
};

this.stackedOptions = {
  tooltips: {
      mode: 'index',
      intersect: false
  },
  responsive: true,
  scales: {
      xAxes: [{
          stacked: true,
      }],
      yAxes: [{
          stacked: true
      }]
  }
};
this.updateChartOptions();
  }
}
