import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EatingActivity } from 'src/app/models/data/eating-activity.model';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PatientListComponent {
  usersWithFilter: User[] = [];
  usersWithoutFilter: User[] = [];
  first = 0;
  rows = 10;
  searchText = "";
  nutritionInformation: boolean = false;
  activityInformation: boolean = false;
  chartOptionsNutritionalValue: any;
  chartOptionsCalorieTracking: any;
  loaded = false;
  loadedInside = false;
  dataCalorieTracking: any;
  dataNutritionalValue: any;
  gainedCalorie: any;
  totalCalories = 2000; //sonradan diyetisyenin vereceği kalori şimdilik biz giriyoruz
  left = 0;
  //totalCalories = 2000; //sonradan diyetisyenin vereceği kalori şimdilik biz giriyoruz
  color = '#b10f0f';
  cal = 0;
  per = 0;
  unit = "";
  tit = "";
  sub = "";
  protein: any;
  carbohydrate: any;
  oil: any;
  drawGraph() {
    this.dataNutritionalValue= {
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
    this.dataCalorieTracking = {
      labels: ['Calories Taken', 'Calories Available'],
      datasets: [
        {
          data: [this.gainedCalorie, this.left],
          backgroundColor: [
            "#f31313",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#f31313",
            "#36A2EB"
          ]
        }
      ]
    };
    this.updateChartOptions();
  }
  entityServiceEatingAct: any;

  constructor(private entityServiceEatingActv: HttpEntityRepositoryService<EatingActivity>, private confirmationService: ConfirmationService, private router: Router, private entityService: HttpEntityRepositoryService<User>, private messageService: MessageService, private authService: AuthService) {
    
    this.entityServiceEatingAct = entityServiceEatingActv;
    entityService.get("/User/GetAllAssignmentsPatientForProfessionnel?professionnelId=", this.authService.CurrentUserId).subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      this.loaded = true;
      this.usersWithFilter = Data.data;
      this.usersWithoutFilter = Data.data;
    });
  }

  userInfo(id: any) {
    this.clickedUserId = id;
    const datepipe: DatePipe = new DatePipe('en-US');
    let date = datepipe.transform(new Date(new Date().setDate(new Date().getDate())), 'YYYY-MM-dd');
    this.gainedCalorie = 0;
    this.left = 0;
    
    this.protein = 0;
    this.carbohydrate = 0;
    this.oil = 0;
    this.entityServiceEatingAct.get("/EatingActivity/GetTotalCalorieByUserIdOnDay?date=" + date + "&userId=", id).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      let chartTitle = ' ';
      if (Data.data.totalCalorie == 0) {
        this.tit = "Henüz besin alınmamış"
        this.sub = "Verilerini görmek için beslen"
        chartTitle = 'Henüz besin alınmamış'
      } else {
        
        chartTitle = 'Besin Değerlerin'
        this.gainedCalorie = Data.data.totalCalorie;
        this.tit = this.cal.toString() + " calorie";
        this.left = this.totalCalories - this.gainedCalorie;
        this.sub = "You can eat " + this.left.toString() + " calorie";
        this.color = '#00db93'
        if (this.left <= 0) {
          this.left = 0;
          this.color = '#b10f0f';
          this.sub = "Yeterli kalori alındı";
        }
        
      this.protein = Data.data.totalProtein;
      this.oil = Data.data.totalOil;
      this.carbohydrate = Data.data.totalCarbohydrate;                  
      }
      
      this.drawGraph();
    })
  }

  open(id: number) {
    this.router.navigate(['/counselee-profile/' + id]);
  }

  public clickedUserId: number = 0;

  openActivity() {
    this.activityInformation = true;
  }

  openFood() {
    this.nutritionInformation = true;
  }

  keyup(searchText) {
    this.searchText = searchText;
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.usersWithFilter ? this.first === (this.usersWithFilter.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.usersWithFilter ? this.first === 0 : true;
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
      }
    }
  }
  updateChartOptions() {
    if (false){
      
      this.chartOptionsCalorieTracking = this.getDarkTheme();
      this.chartOptionsNutritionalValue = this.getDarkTheme;
    }
    else{
      this.chartOptionsCalorieTracking = this.getLightTheme();
      this.chartOptionsNutritionalValue = this.getLightTheme();
    }
  }
  recommendation: string = "";
  rec(recommendation: string){
    this.recommendation = recommendation;
  }
  makeRecommendation(){
    if(this.recommendation == ""){
      return;
    }
    this.confirmationService.confirm({
      message: 'Are you sure you want to make this reccomendation?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let recom = {
          professionalRecommendationId: 0,
          userId: this.clickedUserId,
          professionelUserId: this.authService.CurrentUserId,
          recommendation: this.recommendation
        }
        this.entityService.insert("/api/ProfessionalRecommendation/Add", recom)
          .subscribe(data => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Recommendation sent successfully.' });
          }, err => {
            this.messageService.add({ severity: 'unsuccess', summary: 'Unsuccess', detail: 'An error occurred while recommendation.' });
          });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'Recommendation not sent.' });
      }
    });
  }
}