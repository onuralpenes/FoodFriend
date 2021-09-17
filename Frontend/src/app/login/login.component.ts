import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  flag: boolean = false;
  constructor(private app: AppComponent) { }

  changeLang(langCode: string) {
    this.app.changeLang(langCode);
  }
}
