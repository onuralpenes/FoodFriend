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
  @Output() pin: EventEmitter<any> = new EventEmitter();
  @Input() opened = true;
  @Input() pinButton = true;
  @Input() onDashboard = true; //ilk hangi sayfaya yönlenicek isek true olacak
  @Input() onProfile= false;
  @Input() onFood = false;
  @Input() onActivity = false;
  @Input() onPatients = false;
  @Input() onExpertProfil = false;
  name = "Onuralp Enes ÖZ"
  pageName ="Dashboard";
  email = "oz.onuralp@gmail.com";
  constructor(private router: Router) {
    console.log(this.router.url)
    if(this.router.url == "/profile"){
      this.onProfile = true;
      this.onDashboard = false;
      this.onFood = false;
      this.onActivity = false;
      this.onPatients = false;
      this.pageName = "Profile"
      this.onExpertProfil = false;
    }else if(this.router.url == "/food"){
      this.onProfile = false;
      this.onDashboard = false;
      this.onFood = true;
      this.onActivity = false;
      this.onPatients = false;
      this.pageName = "Food";
      this.onExpertProfil = false;
    }else if(this.router.url == "/activity"){
      this.onProfile = false;
      this.onDashboard = false;
      this.onFood = false;
      this.onActivity = true;
      this.onPatients = false;
      this.pageName = "Activity";
      this.onExpertProfil = false;
    }else if(this.router.url == "/patients"){
      this.onProfile = false;
      this.onDashboard = false;
      this.onFood = false;
      this.onActivity = false;
      this.onPatients = true;
      this.pageName = "Patients";
      this.onExpertProfil = false;
    }
    else if(this.router.url == "/expert-profil"){
      this.onProfile = false;
      this.onDashboard = false;
      this.onFood = false;
      this.onActivity = false;
      this.onPatients = false;
      this.onExpertProfil = true;
      this.pageName = "Expert";
    }
  }
  pinSidebar(){
      this.pinButton = !this.pinButton;
      this.pin.emit("this.pinButton");
  }
  navigateDashboard(){
    this.onActivity = false;
    this.onFood = false;
    this.onProfile = false;
    this.onDashboard = true;
    this.onPatients = false;
    this.onExpertProfil = false;

    this.router.navigate(['/dashboard']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }
    this.pageName = "Dashboard";
  }
  navigateProfile(){

    this.onActivity = false;
    this.onFood = false;
    this.onProfile = true;
    this.onDashboard = false;
    this.onPatients = false;
    this.onExpertProfil = false;

    this.router.navigate(['/profile']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }

    this.pageName = "Profile";
  }
  navigateFood(){
    this.onActivity = false;
    this.onFood = true;
    this.onProfile = false;
    this.onDashboard = false;
    this.onPatients = false;
    this.onExpertProfil = false;

    this.router.navigate(['/food']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }

    this.pageName = "Food";
  }
  navigateActivity(){
    this.onActivity = true;
    this.onFood = false;
    this.onProfile = false;
    this.onDashboard = false;
    this.onPatients = false;
    this.onExpertProfil = false;

    this.router.navigate(['/activity']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }

    this.pageName = "Activity";

  }
  navigatePatients(){
    this.onActivity = false;
    this.onFood = false;
    this.onProfile = false;
    this.onDashboard = false;
    this.onPatients = true;
    this.onExpertProfil = false;

    this.router.navigate(['/patients']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }

    this.pageName = "Patients";


  }
  navigateExpertProfil(){
    this.onActivity = false;
    this.onFood = false;
    this.onProfile = false;
    this.onDashboard = false;
    this.onPatients = false;
    this.onExpertProfil = true;
    this.router.navigate(['/expert-profil']);
    if(!this.pinButton){
      this.toggle.emit(null);
    }

    this.pageName = "Expert";



  }

  ngOnInit(): void {

  }
}
