import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public myAlert: MatSnackBar) {}

  openSnackBar(message: string) {
    this.openSnackBarWithAction(message, 'OK');
  }

  openSnackBarWithAction(message: string, action: string) {
    this.myAlert.open(message, action, {
      duration: 1500,
      panelClass: ["alert"]
    });
  }
}