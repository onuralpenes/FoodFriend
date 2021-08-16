import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
