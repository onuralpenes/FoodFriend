import { Component, OnInit } from '@angular/core';


import { HttpHeaders, HttpClient } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  flag: boolean = false;
  constructor(private translate: TranslateService, private http: HttpClient) { }

  ngOnInit(): void {

  }


  changeLang(langCode: string){
  this.translate.use(langCode);
  }

}
