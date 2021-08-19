import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() opened = true; //Required for connection with the header.
  name = "Onuralp Enes ÖZ"
  email = "oz.onuralp@gmail.com";
  constructor(private router: Router) { 
    
  }
  navigateDashboard(){
    this.router.navigate(['/dashboard']);
  }
  navigateProfile(){
    this.router.navigate(['/profile']);
  }
  navigateFood(){
    this.router.navigate(['/food']);
  }
  navigateActivity(){
    this.router.navigate(['/activity']);
  }
  ngOnInit(): void {
  }
}
