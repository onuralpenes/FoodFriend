import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() opened = true;
  name = "Onuralp Enes ÖZ"
  email = "oz.onuralp@gmail.com";
  constructor(private router: Router) { 
    
  }
  navigateProfile(){
    this.router.navigate(['/profile']);
  }
  navigateDashboard(){
    this.router.navigate(['/dashboard']);
  }
  ngOnInit(): void {
  }
}
