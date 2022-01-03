import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private authService: AuthService, private confirmationService: ConfirmationService) { }
  priv: boolean = false;
  logout() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to logout? ',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.authService.logout();
      },
      reject: () => { }
    });
  }

  freeze() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to freeze your account? ',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

      },
      reject: () => { }
    });
  }

  delete() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete your account? ',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

      },
      reject: () => { }
    });
  }
}
