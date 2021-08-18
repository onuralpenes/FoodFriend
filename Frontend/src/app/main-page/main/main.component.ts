import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sideBar = true;
  toggle(){
    this.sideBar = !this.sideBar;
  }
  ngOnInit(): void {
  }
  

  @Input() opened = true;
  name = "Onuralp Enes ÖZ"
  email = "oz.onuralp@gmail.com";
  constructor(private router: Router) { 
    
  }
  navigateProfile(){
    this.router.navigate(['/profile']);
  }
}
