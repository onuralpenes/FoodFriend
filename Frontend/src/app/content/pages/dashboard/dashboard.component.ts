import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  loaded=false;
  loadedConsumedCalorie = false;
  loadedPieChart = false;
  loadedHealthCard = false;
  loadedEatingHabit = false;

  panelOpenState = false;

  ngOnInit(){
    
  }
  
  getEatingHabitLoaded(event){
    console.log("sa")
    this.loadedEatingHabit = event;
    console.log("EatingHabit = " + this.loadedEatingHabit);
    if(this.loadedConsumedCalorie && this.loadedPieChart && this.loadedHealthCard && this.loadedEatingHabit){
      console.log("getEatinghabit: " , this.loaded )
      this.loaded = true;
      console.log("getEatinghabit: " , this.loaded )
    }  
  }
  getHealthCardLoaded(event){
    this.loadedHealthCard = event;
    console.log("HealthCard = " + this.loadedHealthCard);
    if(this.loadedConsumedCalorie && this.loadedPieChart && this.loadedHealthCard && this.loadedEatingHabit){
      console.log("HealthCard: " , this.loaded )
      this.loaded = true;
      console.log("HealthCard: " , this.loaded )
    }  
  }
  getPieChartLoaded(event){
    this.loadedPieChart = event;
    console.log("PieChart = " + this.loadedPieChart);
    if(this.loadedConsumedCalorie && this.loadedPieChart && this.loadedHealthCard && this.loadedEatingHabit){
      console.log("PieChart: " , this.loaded )
      this.loaded = true;
      console.log("PieChart: " , this.loaded )
    }  
  }
  getConsumedCalorieLoaded(event){
    this.loadedConsumedCalorie = event;
    console.log("ConsumedCalsss = " + this.loadedConsumedCalorie);
    if(this.loadedConsumedCalorie){
      console.log("ConsumedCal: " , this.loaded )
      this.loaded = true;
      console.log("ConsumedCal: " , this.loaded )
    }  
  }
}
