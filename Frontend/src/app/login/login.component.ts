import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';
import { AlertService }from '../helpers/alert.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  flag: boolean = false;
  constructor(private app: AppComponent, loginService: AuthService, private alertService: AlertService ,private route: Router) { 
    if (loginService.isLoggedIn && this.route.url == "/login") {
      this.route.navigateByUrl('/dashboard');

    }
  }

  changeLang(langCode: string) {
    this.app.changeLang(langCode);
  }
  onReject(){
    this.alertService.openAlert(true,"sa");
  }
  onConfirm(){

  }
}
