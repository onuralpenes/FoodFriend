import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AlertService } from 'src/app/helpers/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  flag: boolean = false;
  constructor(private app: AppComponent, private alertService: AlertService) { }

  changeLang(langCode: string) {
    this.app.changeLang(langCode);
  }
  onReject() {
    this.alertService.openAlert(true, "sa");
  }
  onConfirm() {

  }
}
