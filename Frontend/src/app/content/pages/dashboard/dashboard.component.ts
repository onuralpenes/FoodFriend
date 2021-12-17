import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  loaded=false;
  
  panelOpenState = false;
  getConsumedCalorieLoaded(event){
    this.loaded = event;
  }
}
