import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  loaded = false;
  loadedConsumedCalorie = false;
  loadedPieChart = false;
  loadedHealthCard = false;
  loadedEatingHabit = false;

  panelOpenState = false;

  getEatingHabitLoaded(event) {
    this.loadedEatingHabit = event;
    if (this.loadedConsumedCalorie && this.loadedPieChart && this.loadedHealthCard && this.loadedEatingHabit) {
      this.loaded = true;
    }
  }
  getHealthCardLoaded(event) {
    this.loadedHealthCard = event;
    if (this.loadedConsumedCalorie && this.loadedPieChart && this.loadedHealthCard && this.loadedEatingHabit) {
      this.loaded = true;
    }
  }
  getPieChartLoaded(event) {
    this.loadedPieChart = event;
    if (this.loadedConsumedCalorie && this.loadedPieChart && this.loadedHealthCard && this.loadedEatingHabit) {
      this.loaded = true;
    }
  }
  getConsumedCalorieLoaded(event) {
    this.loadedConsumedCalorie = event;
    if (this.loadedConsumedCalorie) {
      this.loaded = true;
    }
  }
}
