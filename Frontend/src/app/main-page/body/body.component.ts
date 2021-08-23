import { Component, Input, OnInit, EventEmitter , Output} from '@angular/core';
import { Router } from '@angular/router';
import { PieChartModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Input() opened = true;
  @Input() pinButton = false;
  @Input() onDashboard = true; //ilk hangi sayfaya yönlenicek isek true olacak
  @Input() onProfile= false;
  @Input() onFood = false;
  @Input() onActivity = false;
  name = "Onuralp Enes ÖZ"
  email = "oz.onuralp@gmail.com";
  constructor(private router: Router) { 
    
  }
  pinSidebar(){
      this.pinButton = !this.pinButton;
    
  }
  navigateDashboard(){
    this.onActivity = false;
    this.onFood = false;
    this.onProfile = false;
    this.onDashboard = true;
    this.router.navigate(['/dashboard']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }
  }
  navigateProfile(){
    
    this.onActivity = false;
    this.onFood = false;
    this.onProfile = true;
    this.onDashboard = false;
    this.router.navigate(['/profile']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }
  }
  navigateFood(){
    this.onActivity = false;
    this.onFood = true;
    this.onProfile = false;
    this.onDashboard = false;
    this.router.navigate(['/food']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }
  }
  navigateActivity(){
    this.onActivity = true;
    this.onFood = false;
    this.onProfile = false;
    this.onDashboard = false;
    this.router.navigate(['/activity']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }
  }
  ngOnInit(): void {

  }
}
