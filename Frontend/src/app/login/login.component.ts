import { Component, OnInit } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  flag: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

}
