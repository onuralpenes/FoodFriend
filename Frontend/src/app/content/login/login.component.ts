import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  flag: boolean = false;
  constructor(private app: AppComponent, private authService: AuthService, private router: Router) { 
    if (this.authService.isLoggedIn){
      this.router.navigateByUrl('/dashboard');
    }
  }

  changeLang(langCode: string) {
    this.app.changeLang(langCode);
  }
}
