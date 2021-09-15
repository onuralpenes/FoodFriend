import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public pageTitle = "";
  title = 'FoodFriend';
  constructor(public translate: TranslateService, loginService: AuthService, private route: Router) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
    if(loginService.isLoggedIn){
      this.route.navigateByUrl('/dashboard');
    }
  }
}
