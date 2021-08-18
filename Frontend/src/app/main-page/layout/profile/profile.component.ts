import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  weight = 85
  height = 181
  age = 21
  constructor() { }

  ngOnInit(): void {
  }

}
