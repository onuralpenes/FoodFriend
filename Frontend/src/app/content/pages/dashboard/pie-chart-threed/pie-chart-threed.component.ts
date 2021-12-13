import { Component } from '@angular/core';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';

export interface MyData {
  oil: number;
  protein: number;
  carb: number;
}

@Component({
  selector: 'app-pie-chart-threed',
  templateUrl: './pie-chart-threed.component.html',
  styleUrls: ['./pie-chart-threed.component.css'],
  providers: [MessageService]
})
export class PieChartThreedComponent {

  data: any;
  protein: any;
  carbohydrate: any;
  oil: any;
  chartOptions: any;

  drawGraph() {
    this.data = {
      datasets: [{
        data: [
          this.protein,
          this.carbohydrate,
          this.oil
        ],
        backgroundColor: [
          "#42A5F5",
          "#66BB6A",
          "#FFA726"
        ],
        label: 'My dataset'
      }],
      labels: [
        "Protein",
        "Carbohydrate",
        "Oil"
      ]
    };
    this.updateChartOptions();

  }
  public chart: any[] = [];
  constructor(entityService: HttpEntityRepositoryService<EatingActivity>, authService: AuthService, private messageService: MessageService) {
    const datepipe: DatePipe = new DatePipe('en-US');
    let date = datepipe.transform(new Date(new Date().setDate(new Date().getDate())), 'YYYY-MM-dd');
    entityService.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date=" + date + "&userId=", authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      let chartTitle = ' ';
      if (Data.data.totalCalorie == 0) {
        chartTitle = 'Henüz besin alınmamış'
      } else {
        chartTitle = 'Besin Değerlerin'
      }
      this.protein = Data.data.totalProtein;
      this.oil = Data.data.totalOil;
      this.carbohydrate = Data.data.totalCarbohydrate;
      this.drawGraph();
    })

  }
  updateChartOptions() {
    this.chartOptions = this.getLightTheme();
  }
  getLightTheme() {
    return {

      borderColor: 'transparent',
      backgroundColor: 'transparent',
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: '#6a7075b8'
          }
        }
      }
    }
  }

  getDarkTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    }
  }
}