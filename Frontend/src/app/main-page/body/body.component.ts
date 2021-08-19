import { Component, Input, OnInit, EventEmitter , Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Input() opened = true;
  name = "Onuralp Enes ÖZ"
  email = "oz.onuralp@gmail.com";
  constructor(private router: Router) { 
    
  }
  navigateDashboard(){
    this.router.navigate(['/dashboard']);
    this.toggle.emit(null);
  }
  navigateProfile(){
    this.router.navigate(['/profile']);
    this.toggle.emit(null);
  }
  navigateFood(){
    this.router.navigate(['/food']);
    this.toggle.emit(null);
  }
  navigateActivity(){
    this.router.navigate(['/activity']);
    this.toggle.emit(null);
  }
  ngOnInit(): void {
  }
}
